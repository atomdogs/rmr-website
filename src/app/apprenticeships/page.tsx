import Link from "next/link";
export default function Apprenticeships() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-[#bc1019] text-sm font-semibold mb-4 uppercase tracking-wider">Training & Development</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">Apprenticeship Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: March 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">1.0 Introduction</h2>
              <p className="text-gray-700 mb-4">
                This policy outlines the fundamental principles and procedures that regulate apprenticeships at RMR Group. The primary aim of this policy is to develop a workforce that is not only highly skilled but also adheres to the standards set by the industry. Additionally, it seeks to promote a culture of professionalism within the organisation. The policy recognises the critical importance of apprenticeships in securing the future of the construction industry, highlighting their role in training and preparing the next generation of skilled workers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">2.0 Objectives</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To provide a clear and consistent framework for the training and management of all apprentices to ensure a fair and high-quality experience.</li>
                <li>To clearly define the roles and responsibilities of all parties involved in the apprenticeship, including the apprentice, line managers, mentors, the HR department, and external training providers.</li>
                <li>To ensure all apprenticeship programmes comply with current government regulations, funding rules, employment law, and meet the quality standards set by relevant bodies such as the Institute for Apprenticeships and Technical Education (IfATE).</li>
                <li>To support the company's long-term talent strategy by creating a sustainable pipeline of skilled and qualified individuals to fill current and future skills gaps.</li>
                <li>To establish a comprehensive support system that fosters a positive and inclusive learning environment, enabling apprentices to achieve their full potential and successfully complete their programme.</li>
                <li>To set clear and consistent standards regarding apprentice performance, attendance, and professional conduct in line with company expectations and values.</li>
                <li>To guarantee effective and fair monitoring, evaluation, and continuous improvement of the apprenticeship programme to maintain its relevance and success.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">3.0 Scope</h2>
              <p className="text-gray-700 mb-4">
                This policy applies to all individuals employed by RMR Group on an approved apprenticeship programme. It also applies to all employees involved in the recruitment, management, training, and supervision of apprentices, including line managers, mentors, and the HR department.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">4.0 Roles and Responsibilities</h2>

              <h3 className="text-xl font-light mb-3 mt-6">4.1 The Apprentice</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Commit fully to the training programme, both on-site and at college.</li>
                <li>Take ownership of your learning, complete all assignments and assessments on time, and maintain your training portfolio/logbook.</li>
                <li>Adhere strictly to all company policies, with a particular focus on Health and Safety procedures.</li>
                <li>Act as a professional representative of RMR Group at all times.</li>
                <li>Maintain open and honest communication with your Line Manager and Mentor.</li>
              </ul>

              <h3 className="text-xl font-light mb-3 mt-6">4.2 The Line Manager</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide meaningful, structured on-the-job training and experience relevant to the apprenticeship standard.</li>
                <li>Ensure a safe working environment and provide a thorough site induction.</li>
                <li>Liaise with the Mentor and Training Provider to align on-site work with learning objectives.</li>
                <li>Approve and record off-the-job training hours and review progress regularly.</li>
              </ul>

              <h3 className="text-xl font-light mb-3 mt-6">4.3 The Mentor</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Act as the primary support contact for the apprentice, providing guidance, encouragement, and advice.</li>
                <li>Conduct regular progress review meetings and help the apprentice overcome any challenges.</li>
                <li>Champion the apprentice's development within the company.</li>
              </ul>

              <h3 className="text-xl font-light mb-3 mt-6">4.4 The HR Department</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Oversee the recruitment and selection process.</li>
                <li>Ensure all legal documentation, including the Apprenticeship Agreement, is in place.</li>
                <li>Manage the relationship with the Training Provider and monitor the overall quality of the programme.</li>
              </ul>

              <h3 className="text-xl font-light mb-3 mt-6">4.5 The Training Provider (College/External Body)</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Deliver the formal "off-the-job" training and assessment as outlined in the apprenticeship standard.</li>
                <li>Monitor the apprentice's academic progress and conduct regular reviews.</li>
                <li>Work in partnership with RMR Group to ensure the apprentice's success.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">5.0 Recruitment and Employment</h2>

              <h3 className="text-xl font-light mb-3 mt-6">5.1 Recruitment and Selection</h3>
              <p className="text-gray-700 mb-4">
                RMR Group is an equal opportunities employer. The selection of apprentices will be based on merit, including a candidate's attitude, potential, and enthusiasm for a career in construction. The recruitment process will be fair, transparent, and in compliance with the Equality Act 2010.
              </p>

              <h3 className="text-xl font-light mb-3 mt-6">5.2 Apprenticeship Agreement</h3>
              <p className="text-gray-700 mb-4">
                All apprentices will be issued with a contract of employment and a statutory Apprenticeship Agreement. This is a legal document that outlines the commitment to the apprenticeship from the apprentice, RMR Group, and the training provider.
              </p>

              <h3 className="text-xl font-light mb-3 mt-6">5.3 Terms and Conditions</h3>
              <p className="text-gray-700 mb-4">
                Your terms of employment, including pay, working hours, holiday entitlement, and other benefits, will be detailed in your employment contract. Pay will always meet or exceed the National Minimum Wage for apprentices. Time spent at college or on other formal off-the-job training activities is counted as part of your contracted working hours and is paid accordingly.
              </p>

              <h3 className="text-xl font-light mb-3 mt-6">5.4 Safeguarding and DBS Checks</h3>
              <p className="text-gray-700 mb-4">
                As part of our commitment to safeguarding, some roles or site placements may require the successful completion of a Disclosure and Barring Service (DBS) check. All employees are required to comply with our company's Safeguarding Policy. For full details on our procedures, please refer to the RMR Group Safeguarding Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">6.0 Health, Safety, and Environment</h2>
              <p className="text-gray-700 mb-4">Health and Safety is our highest priority. Apprentices must:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Comply with all site safety rules, risk assessments, and method statements without exception.</li>
                <li>Always wear the correct Personal Protective Equipment (PPE) as instructed.</li>
                <li>Attend all site inductions and toolbox talks.</li>
                <li>Never undertake a task for which you have not been trained or authorised.</li>
                <li>Report all accidents, incidents, near misses, and hazards immediately to your Site Supervisor.</li>
                <li>Take personal responsibility for your own safety and the safety of those around you.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Failure to adhere to our health and safety policies constitutes gross misconduct and may lead to disciplinary action, including dismissal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">7.0 Conduct, Attendance and Performance</h2>

              <h3 className="text-xl font-light mb-3 mt-6">7.1 Time-keeping & Attendance</h3>
              <p className="text-gray-700 mb-4">
                RMR Group is a site-based organisation, and your contractual place of work is the company office or site location specified in your employment contract. All staff are required to be present at their designated office or site to perform their duties during their contracted working hours. This in-person collaboration is fundamental to our operational model and company culture.
              </p>

              <h4 className="text-lg font-light mb-3 mt-4">Place of Work</h4>
              <p className="text-gray-700 mb-4">
                Consistent attendance and punctuality are essential in the construction sector and at RMR Group. Apprentices must demonstrate a strong sense of reliability and commitment through their regular presence.
              </p>
              <p className="text-gray-700 mb-4">
                Here at RMR Group, consistent attendance and punctuality are not merely expectations; they form the foundation of your professional reliability and serve as a direct indicator of your commitment. Your apprenticeship marks the beginning of your professional journey, and it is vital to show a strong sense of dedication through your regular presence both on-site and at college. This commitment extends beyond merely being present; it involves being prepared and ready to contribute every day.
              </p>
              <p className="text-gray-700 mb-4">
                The construction industry is characterised by strict deadlines and highly coordinated teamwork. The absence of just one team member can disrupt the entire workflow, leading to delays that affect project milestones and our obligations to clients. When you are not present, your colleagues may need to take on your responsibilities, which can hinder their productivity and potentially jeopardise the quality and timeline of the work.
              </p>

              <h4 className="text-lg font-light mb-3 mt-4">Place of Study</h4>
              <p className="text-gray-700 mb-4">
                As part of your apprenticeship, you will be required to attend college or engage with a designated training provider to complete your formal "off-the-job" training. Your commitment to this element of the programme is essential for your success. We expect you to maintain a consistent record of high attendance and punctuality for all scheduled classes, workshops, and meetings. You are required to fully engage with your studies, complete all assignments and coursework by the specified deadlines, and actively participate in all learning activities. Whilst at college or with your training provider, you are acting as a representative of our company, and therefore you must uphold the highest standards of professional conduct, adhering to both our code of conduct and that of the training provider. It is your responsibility to maintain clear and proactive communication, promptly informing both your line manager and your tutor of any challenges, progress, or absences.
              </p>

              <h3 className="text-xl font-light mb-3 mt-6">7.2 Absence</h3>
              <p className="text-gray-700 mb-4">
                The Company recognises you may on occasions require time away from work due to illness. However, we have rules and procedures in place for us to manage your illness with a view to understanding your condition and facilitating your return to work as soon as you are fit and able to do so. Despite this aim, any failure to comply with the rules and procedures relating to our absence and sick pay policy may be treated as a disciplinary offence. Please refer to employee handbook for detailed information regarding this policy but please note the below key information relating to it:
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Process for Reporting Sickness:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Individual to contact line manager to inform of sickness no later than 9:00am on the day they are unwell.</li>
                <li>Line Manager to email sickness@rmrgroup.co.uk, copying in the director responsible for the team of the individual no later than 11:00am on that day.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                During periods of absence due to sickness you will be paid Statutory Sick Pay (SSP) in the UK in accordance with current legislation provided that you comply with the procedures set out below.
              </p>
              <p className="text-gray-700 mb-4">
                Repeated absences of any length may result in your dismissal from employment with the Company if in the business environment in which the Company operates, and in our reasonable opinion, your absence causes staffing issues, or otherwise unreasonably affects the business of the Company. The decision to dismiss you will then automatically end your apprenticeship agreement with us and you will not be able to continue your studies and the funding for your apprenticeship will be cut.
              </p>
              <p className="text-gray-700 mb-4">
                If your absence is in consequence of a disability, you will not be dismissed unless this action is a proportionate means of achieving the Company's aim of ensuring that absence is maintained at a manageable level.
              </p>

              <h3 className="text-xl font-light mb-3 mt-6">7.3 Professional Conduct</h3>
              <p className="text-gray-700 mb-4">
                As an apprentice representing our company, you are expected to conduct yourself in a professional manner at all times, whether you are on-site, at college, or in any other work-related setting. This professional standard is the foundation of your career and is reflected in all your interactions and behaviours. It includes communicating respectfully with all colleagues, supervisors, and clients, maintaining a positive attitude and a strong work ethic, and strictly adhering to all company policies and procedures. In today's workplace, professionalism extends to your use of digital tools and communications; all electronic interactions must be conducted with the same courtesy and diligence as face-to-face conversations. A key component of this professional conduct is developing effective time management. You will be expected to learn and apply these crucial skills to ensure your tasks are completed efficiently, which involves prioritising your work, consistently meeting deadlines, and effectively managing your overall workload. Mastering these behaviours is essential for your success and demonstrates your readiness for the responsibilities ahead. Please refer to our Code of Conduct policy for more information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">8.0 Mentorship, Monitoring, and Support</h2>
              <p className="text-gray-700 mb-4">
                To ensure your success and development, we have established a comprehensive support and evaluation framework for our apprenticeship programme. Upon joining, each apprentice is assigned a dedicated and qualified mentor who will provide continuous guidance, support, and encouragement throughout your training. Your progress and well-being are paramount, which is why regular, scheduled meetings will be held between you and your mentor. These sessions are a confidential and constructive space to discuss your progress, address any challenges you may be facing, and receive valuable feedback. This process of regular monitoring allows us to identify areas for improvement and celebrate your achievements, fostering a supportive learning environment where you can thrive. Furthermore, the apprenticeship programme itself is continually evaluated to ensure it remains effective, up-to-date, and aligned with the highest industry standards, guaranteeing you receive the most relevant and impactful training.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">9.0 Your Commitment</h2>
              <p className="text-gray-700 mb-4">
                As an apprentice and a valued member of our team, you are required to read, understand, and commit to upholding this policy & all company policies and procedures as outlined in our company handbook and in other official communications. These policies, which cover crucial areas including Health and Safety, our Code of Conduct, Equality, Diversity and Inclusion, Sexual Harassment Awareness, GDPR, Safeguarding, Modern Day Slavery, Bullying & Harassment and Data Security, are in place to ensure a safe, professional, and productive environment for everyone. By adhering to these standards, you not only safeguard your own well-being and development but also act as a responsible representative of our company. Failure to comply with any company policy will be treated seriously and may result in disciplinary action, up to and including the termination of your apprenticeship and employment. If you are ever unsure about a policy or its application, it is your responsibility to seek clarification from your line manager or the HR department.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">10.0 Completion of the Apprenticeship</h2>
              <p className="text-gray-700 mb-4">
                Successful completion of the programme is marked by passing the formal End-Point Assessment (EPA). RMR Group is committed to retaining successful apprentices where a suitable role exists within the company. Your performance, attitude, and skill set demonstrated throughout your apprenticeship will be the key factors in determining a long-term future with us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">11.0 Policy Review</h2>
              <p className="text-gray-700 mb-4">
                This policy will be reviewed periodically to ensure it remains relevant and effective. Updates will be made to reflect changes in legislation, industry standards, and best practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">Queries</h2>
              <p className="text-gray-700 mb-4">
                Any queries relating to this policy should be addressed to the HR department.
              </p>
            </section>

            <section className="mb-8 bg-[#fbfbfb] p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                This policy applies to all employees and other personnel engaged in RMR Group operations.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Signed:</strong> Matthew Read
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Date:</strong> March 2025
              </p>
              <p className="text-gray-700">
                Matthew Read<br />
                Managing Director<br />
                On behalf of RMR Group
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-white/50">
            <p>RMR Group © Website by Bayley and Green. Copyright © 2025 RMR Group.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
