# Syed Abdus Sabur — AWS S3 & Vercel Portfolio Website

A modern, responsive personal portfolio website built with HTML5, CSS3 (Glassmorphism & CSS Variables), and JavaScript (ES6+), deployed on **Vercel** and **Amazon S3 Static Website Hosting**.

---

## 🌟 Project Features

- **Glassmorphism Dark Theme**: Modern developer dark console styling with animated gradient background glows and Space Grotesk / JetBrains Mono typography.
- **Dynamic Certifications**: Interactive certification cards linking directly to Syed Abdus Sabur's [LinkedIn Credentials & Certifications](https://www.linkedin.com/in/syedabdussabur/details/certifications/).
- **Resume Download**: One-click resume download functionality linking directly to `resume.pdf`.
- **Project Showcase**: Showcasing hardware/software projects such as the *Arduino-Based Radar Detection System*.
- **Interactive UI**: Typed hero text animations, scroll-spy navbar highlighting, smooth scroll-to-top button, and mobile menu drawer.

---

## ☁️ AWS S3 Deployment Architecture

```
[ Local Development ] ---> [ GitHub Repository ] ---> [ Amazon S3 Bucket ] ---> [ CloudFront / S3 Public Endpoint ]
                                                 ---> [ Vercel CI/CD ]     ---> [ Vercel Live Deployment ]
```

### AWS Services & Tools Used:
- **Amazon S3**: Object storage hosting static website files (`index.html`, `style.css`, `script.js`, `resume.pdf`).
- **S3 Static Website Hosting**: Enabled endpoint serving `index.html` as the root document.
- **AWS S3 Bucket Policy**: Custom JSON policy configured for public read access.
- **Git & GitHub**: Version control and CI/CD source integration.

---

## 📄 AWS S3 Bucket Policy Configuration

To grant public read access to your static portfolio bucket, apply the following Bucket Policy in the AWS S3 Console:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

---

## 🚀 Live Demo & Links

- **GitHub Repository**: [https://github.com/arifuddin1854-svg/aws-s3-portfolio-website](https://github.com/arifuddin1854-svg/aws-s3-portfolio-website)
- **LinkedIn Profile & Certifications**: [https://www.linkedin.com/in/syedabdussabur/details/certifications/](https://www.linkedin.com/in/syedabdussabur/details/certifications/)

---

## 👨‍💻 Author

**Syed Abdus Sabur**  
*AIML Undergraduate | Aspiring Cloud Engineer*  
📧 Email: arifuddin1854@gmail.com  
📱 Phone: +91 63617 46596  
📍 Location: Kalaburagi, Karnataka, India  
