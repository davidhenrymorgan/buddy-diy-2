import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { Resend } from "resend";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName } = body;

    // Validation
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!firstName || typeof firstName !== "string") {
      return NextResponse.json(
        { error: "First name is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Store in Convex
    try {
      await convex.mutation(api.emails.addEmail, {
        email: email.toLowerCase().trim(),
        firstName: firstName.trim(),
        source: "landing-page",
      });
    } catch (convexError: any) {
      if (convexError.message?.includes("already registered")) {
        return NextResponse.json(
          { error: "This email is already registered!" },
          { status: 409 }
        );
      }
      throw convexError;
    }

    // Send confirmation email via Resend
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        to: email,
        subject: "You're on the list, Everybuddy! 🚗",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background-color: #f9f9f9; border-radius: 10px; padding: 30px; margin-bottom: 20px;">
                <h1 style="color: #D32F2F; font-size: 28px; margin-bottom: 20px; font-weight: 900;">
                  What's going on, ${firstName}! 👋
                </h1>

                <p style="font-size: 16px; margin-bottom: 15px;">
                  Thanks for signing up! You're officially on the waitlist.
                </p>

                <p style="font-size: 16px; margin-bottom: 15px;">
                  I'm working hard to build something that actually helps you succeed with car flipping—<strong>no BS, no shortcuts, just real value.</strong>
                </p>

                <p style="font-size: 16px; margin-bottom: 15px;">
                  I'll keep you posted as things develop. In the meantime, check out my latest content:
                </p>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://youtube.com/@buddysdiy"
                     style="display: inline-block; background-color: #D32F2F; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">
                    Visit Buddy's DIY on YouTube
                  </a>
                </div>

                <p style="font-size: 16px; margin-bottom: 15px;">
                  - Buddy
                </p>

                <p style="font-size: 14px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                  <strong>P.S.</strong> Got questions or ideas? Hit reply—I read every email.
                </p>
              </div>

              <div style="text-align: center; font-size: 12px; color: #999;">
                <p>© ${new Date().getFullYear()} Buddy's DIY. All rights reserved.</p>
                <p style="margin-top: 10px;">
                  <a href="https://youtube.com/@buddysdiy" style="color: #D32F2F; text-decoration: none;">YouTube</a> •
                  <a href="https://instagram.com/buddysdiyofficial" style="color: #D32F2F; text-decoration: none;">Instagram</a>
                </p>
              </div>
            </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the request if email sending fails
      // The signup is still successful in Convex
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully signed up! Check your email for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
