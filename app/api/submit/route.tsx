import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request: NextRequest) {
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

  const emailTo = process.env.EMAIL_TO;
  const emailFrom = process.env.EMAIL_FROM;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!emailTo || !emailFrom || !emailPassword) {
    return NextResponse.json(
      { error: { message: "Env variables are not setup." } },
      { status: 500 }
    );
  }

  const transporter = createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: emailFrom,
      pass: emailPassword,
    },
  });

  const result = await transporter.sendMail({
    from: emailFrom,
    to: emailTo,
    subject: `Temsilci Başvurusu: ${submissionData.name}`,
    html: `<p>Ad Soyad: ${submissionData.name}, Dogum Tarihi: ${submissionData.birthdate}, Telefon: ${submissionData.phone}</p>`,
  });

  if (
    (result.rejected && result.rejected.includes(emailTo)) ||
    (result.pending && result.pending.includes(emailTo))
  ) {
    return NextResponse.json(
      {
        error: {
          message: `Rejected by the underlying service.`,
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
