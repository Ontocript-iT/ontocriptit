import React from 'react';
import { Shield, FileText, Lock, Globe, Database, UserCog } from "lucide-react";

const PrivacyPolicySection = ({ icon: Icon, title, children }) => (
    <div className="mb-6 overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
        <div className="flex items-center p-4 border-b border-gray-200 bg-gray-50">
            <Icon className="w-8 h-8 mr-4 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <div className="p-4 leading-relaxed text-gray-700">
            {children}
        </div>
    </div>
);

export default function PrivacyAndPolicies() {
    return (
        <div className="container max-w-4xl px-4 py-8 mx-auto">
            <div className="mb-12 text-center">
                <h1 className="flex items-center justify-center gap-4 text-4xl font-bold text-gray-900">
                    <Shield className="w-12 h-12 text-blue-700" />
                    PRIVACY POLICY
                    <Shield className="w-12 h-12 text-blue-700" />
                </h1>
                <p className="mt-4 text-gray-600">Last Updated: January 2025</p>
            </div>

            <PrivacyPolicySection icon={FileText} title="Introduction">
                Ontocript IT values your privacy. This privacy policy outlines our commitment to protecting the personal information of visitors to our website (www.ontocriptit.com) and users of our services. We believe in transparency and accountability in the collection, usage, and storage of your data.
            </PrivacyPolicySection>

            <PrivacyPolicySection icon={Database} title="Collection and Use of Personal Information">
                <p className="mb-4">
                    When you engage with our website or utilize our services, Ontocript IT may gather your personal information such as Name, Email address, and company name.
                </p>
                <p className="mb-4">
                    We collect this data to facilitate the provision of our services, enhance the functionality of our website, and communicate with you regarding company updates and relevant information.
                </p>
                <p>
                    Additionally, we may automatically collect standard information transmitted by your browser, including your IP address, browser type, access times, and referring website addresses. This information aids us in analyzing website traffic patterns and improving user experience.
                </p>
            </PrivacyPolicySection>

            <PrivacyPolicySection icon={Lock} title="Information Storage">
                At Ontocript IT, we adhere to strict guidelines regarding the storage of your personal information. Your data is retained only for the duration necessary to fulfill the purposes outlined in this policy or until you opt to unsubscribe from our services or request its deletion.
            </PrivacyPolicySection>

            <PrivacyPolicySection icon={Globe} title="Information Sharing">
                Ontocript IT does not engage in the sale, trade, or transfer of your personal information to third parties. However, we may collaborate with trusted third-party service providers to facilitate the operation of our website and support our business activities.
            </PrivacyPolicySection>

            <PrivacyPolicySection icon={Shield} title="Security">
                Protecting your personal information is of utmost importance to us. We employ robust security measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction. While we strive to protect your data, no method of transmission over the internet or electronic storage is highly secure.
            </PrivacyPolicySection>

            <PrivacyPolicySection icon={UserCog} title="Rights to Personal Data">
                As a valued user of Ontocript IT services, you have the right to access, rectify, or delete any personal data held by us. Furthermore, you retain the authority to withdraw your consent for the processing of your data or object to specific uses of your information.
            </PrivacyPolicySection>

            <div className="p-6 mt-12 text-center bg-gray-100 rounded-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">Contact Us</h2>
                <p className="mb-4 text-gray-700">
                    For inquiries about our privacy policy or to exercise your rights regarding your personal data, please contact us at:
                </p>
                <a
                    href="mailto:contact@ontocriptit.com"
                    className="text-lg font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                      contact@ontocriptit.com
                </a>
            </div>
        </div>
    );
}