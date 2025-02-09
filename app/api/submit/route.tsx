import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailTo = process.env.EMAIL_TO;

  if (!emailTo) {
    return NextResponse.json(
      { error: { message: "Env variables are not setup." } },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const submissionData = {
    name: formData.get("name")?.toString(),
    phone: formData.get("phone")?.toString(),
    birthdate: formData.get("birthdate")?.toString(),
  };

  if (!isSubmissionDataValid(submissionData)) {
    return NextResponse.json(
      { error: { message: "Invalid data." } },
      { status: 400 }
    );
  }

  const result = await resend.emails.send({
    from: "ucretsiztemsilciol <onboarding@resend.dev>",
    to: [emailTo],
    subject: "Temsilci Başvurusu [ucretsiztemsilciol.com.tr]",
    html: `<p>Ad Soyad: ${submissionData.name}, Dogum Tarihi: ${submissionData.birthdate}, Telefon: ${submissionData.phone}</p>`,
  });

  if (result.error) {
    return NextResponse.json(
      {
        error: {
          message: `Could not send due to an error from the underlying service: ${result.error.name}`,
        },
      },
      { status: 500 }
    );
  }

  return NextResponse.json({}, { status: 200 });
}

type SubmissionData = {
  name: string;
  phone: string;
  birthdate: string;
};

function isSubmissionDataValid(
  data: Partial<SubmissionData>
): data is SubmissionData {
  return !!data.name && !!data.phone && !!data.birthdate;
}
