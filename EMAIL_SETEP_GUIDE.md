# Email Setup Guide - Contact Form to Gmail

## Option 1: EmailJS (Recommended - FREE)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose **Gmail**
4. Connect your Gmail account
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Sent from: 10 Day Language Journey Website
Time: {{sent_time}}
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Update Your Code
Replace these values in `js/script.js`:

```javascript
// Replace these with your actual values
emailjs.init("YOUR_PUBLIC_KEY");           // Your EmailJS Public Key
'YOUR_SERVICE_ID'                          // Your Gmail Service ID  
'YOUR_TEMPLATE_ID'                         // Your Email Template ID
```

**Where to find these:**
- **Public Key**: Account → API Keys
- **Service ID**: Email Services → Your Gmail Service
- **Template ID**: Email Templates → Your Template

### Step 5: Test Your Form
1. Fill out your contact form
2. Check your Gmail for the message
3. Done! 🎉

---

## Option 2: Formspree (Alternative - Also FREE)

### Step 1: Sign up at Formspree
1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form

### Step 2: Update Your HTML
Replace the form action in `index.html`:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Step 3: Update JavaScript
Replace the form handler in `js/script.js`:

```javascript
// Formspree form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            this.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    });
});
```

---

## Option 3: Google Forms (Simplest)

### Step 1: Create Google Form
1. Go to [https://forms.google.com/](https://forms.google.com/)
2. Create a new form with fields: Name, Email, Message
3. Get the form URL

### Step 2: Update Your Button
Replace the form with a simple button:

```html
<a href="YOUR_GOOGLE_FORM_URL" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
    Send Message
</a>
```

---

## Recommendation

**Use EmailJS** - It's free, professional-looking, and emails come directly to your Gmail with a clean format. The setup takes about 10 minutes, and you get 200 free emails per month.

## Security Note

With EmailJS, your email credentials are never exposed. The service handles everything securely through their servers.

## Need Help?

If you need assistance with the setup, let me know which option you'd prefer and I can guide you through the specific steps!