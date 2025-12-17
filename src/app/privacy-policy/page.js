import React from 'react';
import '../globals.css';


const Page = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', backgroundColor: '#EFDFCB', color: 'black', minHeight: '100vh',paddingRight : "20%", paddingLeft : '20%'}} className='px-5'>
            <h1 style={{ fontSize : "20px", textAlign:'center'}}>Privacy Policy</h1>
            <p>This app does not require user registration or login.</p>
            <p>
                We collect limited information such as <strong>name</strong>, <strong>phone number</strong>, and <strong>location</strong>, which is voluntarily provided by the user while submitting their doubts. This information is used only to process and respond to user queries.
            </p>

            <p>
                Each user’s submitted doubts are assigned an internal doubt ID to display query history within the app. This data is stored only to provide the history feature and is removed from the user’s device when the app is uninstalled.
            </p>

            <p>We do not sell, rent, or share user data with third parties.</p>

            <p>
                The app displays bank details and provides a UPI redirection (Paytm) only for optional donations. We do not collect, process, or store any payment information.
            </p>

            <p>
                If you have any questions about this Privacy Policy, contact us at:
            </p>

            <hr style={{ margin: '40px 0', borderColor: '#ccc' }} />

            <p>यह ऐप उपयोगकर्ता पंजीकरण या लॉगिन की आवश्यकता नहीं करता है।</p>

            <p>
                हम सीमित जानकारी जैसे <strong>नाम</strong>, <strong>फोन नंबर</strong>, और <strong>स्थान</strong> एकत्र करते हैं, जो उपयोगकर्ता द्वारा अपनी शंकाएँ सबमिट करते समय स्वेच्छा से प्रदान की जाती है। यह जानकारी केवल उपयोगकर्ता की शंकाओं को संसाधित और उत्तर देने के लिए उपयोग की जाती है।
            </p>

            <p>
                प्रत्येक उपयोगकर्ता की सबमिट की गई शंकाओं को एक आंतरिक शंका आईडी दी जाती है ताकि ऐप में प्रश्न इतिहास दिखाया जा सके। यह डेटा केवल इतिहास सुविधा प्रदान करने के लिए संग्रहीत किया जाता है और ऐप को अनइंस्टॉल करने पर उपयोगकर्ता के डिवाइस से हटा दिया जाता है।
            </p>

            <p>हम उपयोगकर्ता डेटा को तीसरे पक्ष के साथ बेचते, किराए पर देते, या साझा नहीं करते हैं।</p>

            <p>
                ऐप केवल वैकल्पिक दान के लिए बैंक विवरण प्रदर्शित करता है और एक यूपीआई रीडायरेक्शन (पेटीएम) प्रदान करता है। हम किसी भी भुगतान जानकारी को एकत्र, संसाधित, या संग्रहीत नहीं करते हैं।
            </p>

            <p>
                यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न हैं, तो हमसे संपर्क करें:
            </p>
        </div>
    );
};

export default Page;