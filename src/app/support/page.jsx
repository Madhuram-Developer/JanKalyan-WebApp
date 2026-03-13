const SUPPORT_CONTACTS = {
  emails: [
    { label: "General Support", address: "jankalyanapp@gmail.com" },
  ],
  phones: [
    { label: "Helpline", number: "+91 70284 16816", hours: "Mon-Fri, 9 AM - 6 PM" },
  ],
};

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex flex-col items-center px-4 py-16">

      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500 shadow-lg mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Support &amp; Contact</h1>
        <p className="mt-3 text-gray-500 text-lg max-w-md mx-auto">
          We&apos;re here to help with all your app realted queries. Reach out through any of the channels below.
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-8">

        {/* Email Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500"><EmailIcon /></span>
            <h2 className="text-xl font-semibold text-gray-800">Email Us</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {SUPPORT_CONTACTS.emails.map((item) => (
              <a
                key={item.address}
                href={`mailto:${item.address}`}
                className="group flex flex-col gap-1 bg-white rounded-2xl px-6 py-5 shadow-sm border border-orange-100 hover:border-orange-400 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs font-medium text-orange-500 uppercase tracking-widest">{item.label}</span>
                <span className="text-gray-800 font-semibold group-hover:text-orange-600 transition-colors break-all">
                  {item.address}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-dashed border-orange-200" />

        {/* Phone Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500"><PhoneIcon /></span>
            <h2 className="text-xl font-semibold text-gray-800">Call Us</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {SUPPORT_CONTACTS.phones.map((item) => (
              <a
                key={item.number}
                href={`tel:${item.number.replace(/\s/g, "")}`}
                className="group flex flex-col gap-1 bg-white rounded-2xl px-6 py-5 shadow-sm border border-orange-100 hover:border-orange-400 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs font-medium text-orange-500 uppercase tracking-widest">{item.label}</span>
                <span className="text-gray-800 font-semibold text-lg group-hover:text-orange-600 transition-colors">
                  {item.number}
                </span>
                <span className="text-xs text-gray-400">{item.hours}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-400 pt-4">
          JanKalyan &mdash; Serving the community with care.
        </p>
      </div>
    </main>
  );
}
