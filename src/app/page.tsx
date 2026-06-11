"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
        {
          name: "Cart",
          id: "#cart",
        },
        {
          name: "Login",
          id: "/management/login",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/gradient-shopping-center-labels-template_23-2149336465.jpg"
      logoAlt="RAZNER Logo"
      brandName="RAZNER"
    />
  </div>

  <div id="home" data-section="home">
      <HeroCentered
      background={{
        variant: "radial-gradient",
      }}
      title="Shop Smarter, Live Better with RAZNER"
      description="Discover a curated collection of products tailored to your needs. Enjoy seamless shopping, secure payments, and reliable delivery right to your doorstep."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-big-smile-her-face-after-big-shopping_329181-18748.jpg",
          alt: "Happy Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-wearing-blue-outfit-looking-happy_1298-197.jpg",
          alt: "Happy Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-carrying-shopping-bags_23-2148660762.jpg",
          alt: "Happy Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blond-man-surprised_1194-2887.jpg",
          alt: "Happy Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-with-shopping-bags_329181-18722.jpg",
          alt: "Satisfied Shopper",
        },
      ]}
      avatarText="Join 100,000+ satisfied shoppers!"
      buttons={[
        {
          text: "Explore Products",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Fashion",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/top-view-brown-paper-labels-with-copy-space_23-2148838839.jpg",
          alt: "Fashion Icon",
        },
        {
          type: "text",
          text: "Electronics",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/home-icon-sign-right-side-white-background_187299-40314.jpg",
          alt: "Electronics Icon",
        },
        {
          type: "text",
          text: "Home Goods",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/summer-themed-note-with-yellow-wall_53876-139518.jpg",
          alt: "Home Goods Icon",
        },
        {
          type: "text",
          text: "Beauty",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/flat-lay-collection-supplies-one-color_23-2149669174.jpg",
          alt: "Beauty Icon",
        },
        {
          type: "text",
          text: "Sports",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/flat-set-colorful-icons-with-people-having-rest-doing-sports-playing-park-isolated-white-illustration_98292-8084.jpg",
          alt: "Sports Icon",
        },
        {
          type: "text",
          text: "Books",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/illustration-vector-line-collection_53876-80284.jpg",
          alt: "Books Icon",
        },
      ]}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="About RAZNER: Your Trusted Online Retailer"
      description="At RAZNER, we believe in bringing quality products and unparalleled convenience directly to you. Our mission is to make online shopping a delightful and secure experience for everyone, with customer satisfaction at our core."
      metrics={[
        {
          value: "100K+",
          title: "Happy Customers",
        },
        {
          value: "5000+",
          title: "Products Delivered",
        },
        {
          value: "Top 5%",
          title: "Customer Satisfaction",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-man-with-tablet-kitchen_23-2147769504.jpg"
      imageAlt="Person enjoying online shopping on a tablet"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "feature-1",
          label: "Seamless Experience",
          title: "Intuitive Browsing & Search",
          items: [
            "User-friendly interface for easy navigation",
            "Advanced search with category and price filters",
            "Personalized recommendations based on your preferences",
          ],
        },
        {
          id: "feature-2",
          label: "Secure & Flexible",
          title: "Payment Options on Delivery",
          items: [
            "Choose between Cash on Delivery or Online Payment on Delivery",
            "Your financial details are safe and never stored directly",
            "Enjoy peace of mind with every purchase",
          ],
        },
        {
          id: "feature-3",
          label: "Reliable Service",
          title: "Fast & Trackable Delivery",
          items: [
            "Quick dispatch and efficient delivery services",
            "Track your order status from dispatch to doorstep",
            "Dedicated support team for any delivery queries",
          ],
        },
      ]}
      title="Why Choose RAZNER for Your Shopping?"
      description="We're dedicated to making your online shopping experience effortless and rewarding. From browsing to checkout, every step is designed with you in mind."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "prod-1",
          name: "Smart Watch Pro",
          price: "$199.99",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-unrecognizable-woman-checking-health-app-her-wrist-gadget_1098-18985.jpg",
          imageAlt: "Smart Watch Pro",
          rating: 4.5,
        },
        {
          id: "prod-2",
          name: "Noise Cancelling Headphones",
          price: "$149.99",
          imageSrc: "http://img.b2bpic.net/free-photo/black-cordless-headphones-gray-textile_417767-474.jpg",
          imageAlt: "Noise Cancelling Headphones",
          rating: 4.8,
        },
        {
          id: "prod-3",
          name: "Ceramic Coffee Mug",
          price: "$15.00",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-tea-party-arrangement_23-2149045882.jpg",
          imageAlt: "Ceramic Coffee Mug",
          rating: 4.2,
        },
        {
          id: "prod-4",
          name: "Ultra-Slim Smartphone",
          price: "$799.00",
          imageSrc: "http://img.b2bpic.net/free-photo/various-digital-devices-table_23-2147929631.jpg",
          imageAlt: "Ultra-Slim Smartphone",
          rating: 4.7,
        },
        {
          id: "prod-5",
          name: "Ergonomic Gaming Chair",
          price: "$299.00",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-seat-gamers_23-2149746563.jpg",
          imageAlt: "Ergonomic Gaming Chair",
          rating: 4.6,
        },
        {
          id: "prod-6",
          name: "Premium Leather Wallet",
          price: "$45.50",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-businessman-handsome-model-man-dressed-elegant-blue-suit-gray_158538-11063.jpg",
          imageAlt: "Premium Leather Wallet",
          rating: 4.3,
        },
      ]}
      title="Our Featured Products"
      description="Explore a diverse selection of our most popular and highly-rated products. Use the search bar and filters to find exactly what you're looking for!"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "http://img.b2bpic.net/free-vector/world-consumer-rights-day-illustration-with-shopping-cart_23-2148853133.jpg",
        "http://img.b2bpic.net/free-vector/hardware-engineering-internet-25-line-filled-icon-pack-including-internet-connectivity-operation-network-house_1142-21386.jpg",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=arongw",
        "http://img.b2bpic.net/free-vector/modern-delivery-logo-template_23-2147878086.jpg",
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vnk3j0",
        "http://img.b2bpic.net/free-photo/person-working-html-computer_23-2150038843.jpg",
        "http://img.b2bpic.net/free-photo/group-people-holding-ecological-sign_23-2147831648.jpg",
      ]}
      title="Trusted by Leading Brands & Partners"
      description="We collaborate with industry leaders to ensure you receive the best products and a secure shopping experience."
      showCard={false}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="RAZNER has completely changed my online shopping experience. The process is so easy, and the Cash on Delivery option gives me great peace of mind. Their products are top-notch!"
      rating={5}
      author="Aisha K., Satisfied Customer"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/head-shot-happy-beautiful-young-woman-posing-indoors-looking-camera-smiling_74855-10218.jpg",
          alt: "Aisha K.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-happy-handsome-man-writing-message-mobile-phone-holding-smartphone-smiling-standin_1258-149917.jpg",
          alt: "John D.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/picture-showing-pretty-woman-shopping-online-with-credit-card-woman-holding-credit-card-using-laptop-online-shopping-concept_657921-424.jpg",
          alt: "Maria S.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-speaking-phone-near-woman-with-laptop_23-2147779661.jpg",
          alt: "David L.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-looking-photographer_23-2148339179.jpg",
          alt: "Emily R.",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What payment methods do you accept?",
          content: "RAZNER exclusively offers Cash on Delivery and Online Payment on Delivery (via secure mobile payment apps at the time of delivery). We do not accept upfront online payments to ensure maximum flexibility and trust.",
        },
        {
          id: "faq-2",
          title: "How can I track my order?",
          content: "Once your order is confirmed, you will receive a tracking link via email and SMS. You can use this link to monitor the real-time status of your delivery, from dispatch to your doorstep.",
        },
        {
          id: "faq-3",
          title: "What is your return policy?",
          content: "We offer a hassle-free 7-day return policy for most items. Products must be unused, in their original packaging, and with all tags attached. Please refer to our full return policy page for more details.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/faq-question-information-helpdesk-graphic-word_53876-121004.jpg"
      imageAlt="Customer asking questions"
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="Frequently Asked Questions"
      description="Have questions? We're here to help! Find quick answers to the most common queries about shopping with RAZNER."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to discover your next favorite product? Shop now with RAZNER!"
      buttons={[
        {
          text: "Start Shopping Now",
          href: "#products",
        },
        {
          text: "Get Support",
          href: "mailto:support@razner.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "#products",
            },
            {
              label: "Latest Arrivals",
              href: "#",
            },
            {
              label: "Best Sellers",
              href: "#",
            },
            {
              label: "Categories",
              href: "#",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Customer Reviews",
              href: "#testimonials",
            },
            {
              label: "Partnerships",
              href: "#social-proof",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Shipping & Returns",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 RAZNER. All rights reserved."
      bottomRightText="Built with love for seamless shopping."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
