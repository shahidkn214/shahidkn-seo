"use server";

import { prisma } from "@/lib/prisma";

export interface AuditSubmissionResult {
  success: boolean;
  error?: string;
}

export async function submitAuditRequest(formData: FormData): Promise<AuditSubmissionResult> {
  try {
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const website = (formData.get("website") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !website || !message) {
      return {
        success: false,
        error: "All fields are required. Please fill in your name, email, website, and message.",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      };
    }

    await prisma.auditRequest.create({
      data: {
        name,
        email,
        website,
        message,
        status: "pending",
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit audit request:", error);
    return {
      success: false,
      error: "An unexpected error occurred while saving your audit request. Please try again.",
    };
  }
}

