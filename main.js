/* ====================================================
   AL-NOOR LUXURY PROPERTIES — SHARED JS
   Language Switching • Scroll Animations • Nav • Cards
   ==================================================== */

(function () {
  'use strict';

  // ─── Content Translations ──────────────────────────────────────────────────

  const TRANS = {
    en: {
      // Nav
      nav_home: 'Home',
      nav_about: 'About Us',
      nav_projects: 'Projects',
      nav_offers: 'Services',
      nav_investors: 'Investors',
      nav_suppliers: 'Suppliers',
      nav_contact: 'Contact Us',
      logo_sub: 'Awn Real Estate Development and Investment',

      // Home Hero
      hero_eyebrow: 'Awnalmaali · Jeddah, Saudi Arabia',
      hero_title_1: 'Awn Real Estate Development',
      hero_title_accent: 'and Investment',
      hero_desc: 'Your trusted partner in real estate development, investment, marketing, and property management. Building value that lasts for generations.',
      hero_cta_1: 'Explore Projects',
      hero_cta_2: 'Contact Us',
      scroll_label: 'Scroll to discover',

      // Stats
      stat_projects: 'Coming Projects',
      stat_units: 'Opportunities',
      stat_clients: 'Partners &amp; Clients',

      // Sections
      featured_eyebrow: 'Our Projects',
      featured_title: 'Featured Projects',
      featured_lead: 'Discover our portfolio of real estate development and investment projects in Jeddah',
      offers_eyebrow: 'Our Services',
      offers_title: 'What We Offer',
      offers_lead: 'Integrated real estate solutions built on trust, transparency, and professionalism',
      about_eyebrow: 'Our Identity',
      about_title: 'Who We Are',
      about_p1: 'Awn Endures &mdash; Growth Bears Fruit. The name "Awn" extends from our family identity, but carries a deeper meaning &mdash; to be a support, a pillar, and a trusted partner in building real estate and investment decisions. We build lasting relationships founded on trust and a genuine understanding of human needs before market demands.',
      about_p2: 'We provide high-quality real estate solutions based on thorough study and deep market analysis, with an unwavering commitment to transparency and credibility.',
      contact_eyebrow: 'Get In Touch',
      contact_title: 'We Are Here to Help — Contact Us Today',

      // Filter tabs
      filter_all: 'All',
      filter_dev: 'Development',
      filter_inv: 'Investment',
      filter_mgmt: 'Management',

      // Badges
      badge_featured: 'Featured',
      badge_new: 'New',
      badge_exclusive: 'Exclusive',

      // Project locations
      loc_andalus: 'Al-Andalus, Jeddah',
      loc_madinah: 'Madinah Road, Jeddah',
      loc_shati: 'Al-Shati District, Jeddah',
      loc_hamra: 'Al-Hamra, Jeddah',
      loc_corniche: 'Corniche, Jeddah',
      loc_rawdah: 'Al-Rawdah, Jeddah',
      loc_shati_short: 'Al-Shati, Jeddah',

      // Project names
      proj_name_1: 'Wallet Project',
      proj_name_2: 'Tower Project',
      proj_name_3: 'Trade Building',
      proj_name_4: 'Resident Building',

      // Project prices
      price_coming_soon: 'Coming Soon',
      price_under_dev: 'Under Development',
      price_exclusive: 'Exclusive',
      price_inv_opp: 'Investment Opportunity',
      price_full_service: 'Full Service',
      price_mgmt_ops: 'Management &amp; Operations',
      price_under_study: 'Under Study',
      price_feasibility: 'Feasibility Phase',
      price_premium_opp: 'Premium Opportunity',
      price_active: 'Active',
      price_under_mgmt: 'Under Management',

      // Project features
      feat_premium_res: 'Premium Residences',
      feat_prime_loc: 'Prime Location',
      feat_modern_design: 'Modern Design',
      feat_secure_inv: 'Secure Investment',
      feat_verified_asset: 'Verified Asset',
      feat_expert_adv: 'Expert Advisory',
      feat_full_mgmt: 'Full Management',
      feat_tenant_rel: 'Tenant Relations',
      feat_247_support: '24/7 Support',
      feat_mixed_use: 'Mixed Use',
      feat_strategic_loc: 'Strategic Location',
      feat_high_roi: 'High ROI',
      feat_sea_view: 'Sea View',
      feat_ready_now: 'Ready Now',
      feat_full_ops: 'Full Operations',
      feat_tenant_mgmt: 'Tenant Management',
      feat_maint_incl: 'Maintenance Included',

      // About page
      about_story: 'Our Identity',
      about_story_title: 'Who We Are',
      about_name_meaning: 'The name "Awn" extends from our family identity, bearing a deeper meaning — to be a support, a pillar, and a trusted partner in building real estate and investment decisions. We build lasting relationships founded on trust and a genuine understanding of human needs before market demands.',
      about_vision_title: 'Our Vision',
      about_vision: 'To be the most prominent real estate and investment entity in the Kingdom, delivering exceptional projects that align with Vision 2030 and create sustainable value that inspires generations.',
      about_mission_title: 'Our Mission',
      about_mission: 'Providing high-quality real estate solutions based on thorough study and deep market analysis, with a commitment to transparency and credibility as a steadfast standard.',
      about_feat_trust: 'Trust &amp; Transparency',
      about_feat_trust_desc: 'Complete clarity in every step — no hidden fees, no surprises',
      about_feat_vision: 'Vision 2030 Aligned',
      about_feat_vision_desc: "Contributing to Saudi Arabia's urban development and economic growth",
      about_feat_partner: 'Strategic Partnerships',
      about_feat_partner_desc: 'Building an extensive network with investors, developers, and brokers',
      about_team_philosophy: 'At Awn, we believe excellence is driven by quality competencies and human passion. Our team includes an elite group of experts, engineers, and financial analysts who share one vision: "Commitment to promises and fulfilling them above all else."',
      about_team_lead: 'Under the supervision and direction of CEO Mr. Abdullah Ahmed Abdullah Al Awn Al Qahtani, all sectors of the company operate with a strict integrative system based on accuracy, transparency, and professionalism as non-negotiable standards. We lead a system that creates sustainable impact.',

      // Values
      values_title: 'Our Values',
      values_sub: 'What Drives Us Every Day',
      value_trust: 'Trust',
      value_trust_desc: 'Trust is the foundation of every relationship we build. We earn it through consistent, honest actions.',
      value_transparency: 'Transparency',
      value_transparency_desc: 'Complete clarity in every step. No hidden fees, no surprises — just honest, open communication.',
      value_prof: 'Professionalism',
      value_prof_desc: 'High-performance standards, precision, and excellence in every service we deliver.',
      value_partner: 'Partnership',
      value_partner_desc: 'We believe success is built through collaboration, shared goals, and mutual benefit.',
      value_sustain: 'Sustainability',
      value_sustain_desc: 'Building lasting value that supports growth, stability, and a positive impact for generations.',
      value_innov: 'Innovation',
      value_innov_desc: 'Turning ideas into real investment opportunities with modern approaches and smart solutions.',

      // Team
      team_eyebrow: 'Our Team',
      team_title: 'Hands Building the Future',
      team_lead: 'Excellence driven by quality competencies and human passion',
      team_name: 'Abdullah Ahmed Abdullah Al Awn Al Qahtani',
      team_role: 'Founder &amp; CEO',
      team_bio: 'Leading Awnalmaali with a vision rooted in trust, innovation, and sustainable growth. Committed to building a pioneering real estate and investment entity in the Kingdom of Saudi Arabia.',

      // Accreditations
      accred_jeddah: 'Jeddah Chamber',
      accred_jeddah_desc: 'Membership No. 669093 \u00B7 CR 4127',
      accred_vat: 'VAT Registered',
      accred_vat_desc: 'ZATCA \u00B7 Since 31/07/2024',
      accred_unified: 'Unified No.',
      accred_unified_desc: '7054135533',
      accred_nat_addr: 'National Address',
      accred_nat_addr_desc: 'JCAA9476 \u00B7 Madinah Road',

      // Contact page
      contact_info_sub: 'Write your interests to get back to you with the best suitable opportunities from our sales team. We respond within 2 business hours.',
      contact_label_addr: 'Address',
      contact_label_phone: 'Phone',
      contact_label_email: 'Email',
      contact_label_website: 'Website',
      contact_label_whatsapp: 'WhatsApp',
      contact_whatsapp_text: 'Message Awn Al-Maali for Real Estate Development and Investment via WhatsApp',
      contact_addr_val: '9476 Madinah Road, Al-Andalus\nP.O. Box 4127, Jeddah 23326\nKingdom of Saudi Arabia',
      contact_phone_val: '0558100341\n0500828856',
      contact_email_val: 'Info@awnalmaali.com',
      contact_website_val: 'awnalmaali.com',
      contact_form_title: 'Request a Consultation',
      contact_form_first: 'First Name',
      contact_form_last: 'Last Name',
      contact_form_phone: 'Phone Number',
      contact_form_email: 'Email Address',
      contact_form_interest: 'Service Interest',
      contact_form_budget: 'Budget Range (SAR)',
      contact_form_msg: 'Message',
      contact_form_placeholder_first: 'First Name',
      contact_form_placeholder_last: 'Last Name',
      contact_form_placeholder_phone: '+9665XXXXXXXX',
      contact_form_placeholder_email: 'your@email.com',
      contact_form_placeholder_msg: 'Tell us about your requirements, investment goals, or any questions...',
      contact_form_sel_default: 'Select service',
      contact_form_sel_dev: 'Real Estate Development',
      contact_form_sel_inv: 'Real Estate Investment',
      contact_form_sel_mgmt: 'Property Management',
      contact_form_sel_brok: 'Marketing &amp; Brokerage',
      contact_form_sel_cons: 'Real Estate Consulting',
      contact_form_sel_other: 'Other Enquiry',
      contact_form_budget_default: 'Select budget range',
      contact_form_budget_1: 'Under 1,000,000',
      contact_form_budget_2: '1,000,000 \u2013 5,000,000',
      contact_form_budget_3: '5,000,000 \u2013 20,000,000',
      contact_form_budget_4: '20,000,000 \u2013 50,000,000',
      contact_form_budget_5: '50,000,000+',

      // Footer
      footer_ksa: 'Kingdom of Saudi Arabia \u2014 Jeddah',
      footer_addr_1: '9476 Madinah Road, Al-Andalus',
      footer_addr_2: 'P.O. Box 4127, Jeddah 23326',
      footer_serv_dev: 'Real Estate Development',
      footer_serv_inv: 'Real Estate Investment',
      footer_serv_mgmt: 'Property Management',
      footer_serv_brok: 'Marketing &amp; Brokerage',
      footer_serv_cons: 'Real Estate Consulting',

      // Services / Offers page
      services_main_title: 'Integrated Solutions — From Idea to Real Investment',
      services_hero_sub: 'Built on Trust &amp; Transparency',
      services_eyebrow: 'Comprehensive Solutions',
      services_intro: 'We offer a comprehensive system of services designed to meet the aspirations of individuals, companies, and investors with high efficiency and reliability.',
      countdown_day: 'Day',
      countdown_hour: 'Hour',
      countdown_min: 'Min',
      countdown_sec: 'Sec',
      srv_badge_dev: 'Development',
      srv_tag_dev: 'Real Estate Development',
      srv_title_dev: 'End-to-End Project Development',
      srv_desc_dev: 'Turning ideas and opportunities into distinctive residential and commercial projects and complexes based on innovation and quality.',
      srv_badge_inv: 'Investment',
      srv_tag_inv: 'Real Estate Investment',
      srv_title_inv: 'Exclusive Investment Opportunities',
      srv_desc_inv: 'Accurate reading of exclusive opportunities, intelligent risk management to ensure sustainable returns and safe capital growth.',
      srv_badge_mgmt: 'Management',
      srv_tag_mgmt: 'Property Management',
      srv_title_mgmt: 'Full-Spectrum Property Operations',
      srv_desc_mgmt: 'Preserving and developing real estate assets to ensure the sustainability of their investment value over the long term.',
      srv_badge_mktg: 'Marketing',
      srv_tag_mktg: 'Marketing &amp; Brokerage',
      srv_title_mktg: 'Professional Real Estate Brokerage',
      srv_desc_mktg: 'Supporting the sales, purchase, and leasing ecosystem with advanced marketing tools and specialised databases serving clients and brokers.',
      srv_badge_cons: 'Consulting',
      srv_tag_cons: 'Consulting &amp; Procedural Follow-up',
      srv_title_cons: 'Expert Advisory &amp; Legal Support',
      srv_desc_cons: 'Providing advice based on experience, and facilitating ownership and investment processes for citizens, residents, and foreign investors legally and procedurally.',
      srv_badge_fin: 'Financing',
      srv_tag_fin: 'Financing Solutions',
      srv_title_fin: 'Integrated Financing Solutions',
      srv_desc_fin: 'We connect clients with suitable financing institutions and offer tailored financing solutions that align with their needs and investment goals. Our partnerships with leading Saudi banks ensure competitive rates and smooth processing.',
      banner_commit: 'Our Commitment',
      banner_commit_title: 'Trust &amp; Transparency First',
      banner_commit_desc: 'We are committed to complete transparency, professionalism, and quality in every service we deliver. Every relationship is built on trust, and every promise is honoured.',
      banner_vision: 'Vision 2030',
      banner_vision_title: 'Aligned with National Goals',
      banner_vision_desc: "Our work contributes to Saudi Arabia's urban development and economic growth, supporting the ambitious goals of Vision 2030 through sustainable real estate development and investment.",

      // Projects CTA
      proj_cta_eyebrow: 'Looking for a specific opportunity?',
      proj_cta_title: 'We Have Exclusive Investment Opportunities Available',

      // Investors page
      inv_eyebrow: 'Strategic Partnership',
      inv_title: 'We Create Opportunities for Growth That Bears Fruit',
      inv_vision: 'We see investment from the perspective of partnership and integrated interests — true success is built through collaboration. We conduct in-depth analysis of the real estate market and make informed investment decisions aimed at preserving and growing assets and intelligently mitigating risks.',
      inv_offer_title: 'What We Offer Our Investment Partners',
      inv_offer_1: 'Exclusive opportunities in prime locations across the Makkah Region',
      inv_offer_2: 'Financing solutions linking investors with suitable financing entities aligned with investment goals',
      inv_offer_3: 'Complete transparency with periodic reports and full clarity in every financial or procedural step',

      // Suppliers page
      sup_hero_eyebrow: 'Partners in Quality',
      sup_hero_title: 'Supplier Portal',
      sup_hero_sub: 'Building &amp; Sustainability — Join Our Network',
      sup_eyebrow: 'Partners in Quality',
      sup_title: 'Building &amp; Sustainability — Supplier Portal',
      sup_intro: 'Because we are committed to delivering the highest levels of efficiency and reliability, we consider our network of suppliers and contractors an integral part of our identity and real estate credibility. We are always looking for entities that share our values of "Quality, Commitment, and Sustainability" to transform plans into living landmarks on the ground.',
      sup_criteria: 'The Awnalmaali Supplier Portal welcomes qualification applications from companies and institutions specialised in building materials, contracting, technical and engineering solutions, according to fair and clear evaluation mechanisms that ensure equal opportunities and sustainable integrated interests.',
      sup_cta: 'Apply as a Supplier',

      // Index offers preview
      offer_dev: 'Development',
      offer_dev_project: 'Real Estate Development',
      offer_dev_desc: 'End-to-end project development from feasibility studies and design through construction and delivery, aligned with market needs and Vision 2030.',
      offer_inv: 'Investment',
      offer_inv_project: 'Real Estate Investment',
      offer_inv_desc: 'Exclusive investment opportunities, portfolio management, and strategic advisory for individuals and institutions seeking sustainable returns.',
      offer_mgmt: 'Management',
      offer_mgmt_project: 'Property Management',
      offer_mgmt_desc: 'Full-spectrum property operations, tenant relations, maintenance, and after-sales support to maximise asset value and owner peace of mind.',
      btn_see_all: 'See All Services',

      // Buttons
      btn_view_all: 'View All Projects',
      btn_book_now: 'Inquire Now',
      btn_view_details: 'View Details',
      btn_save: 'Save',
      btn_learn_more: 'Learn More',
      btn_send: 'Send Message',
      btn_request: 'Request Consultation',
      btn_inquire: 'Inquire',

      // Footer
      footer_tagline: 'Your trusted partner for real estate development and investment in Jeddah.',
      footer_quick: 'Quick Links',
      footer_types: 'Our Services',
      footer_areas: 'Areas We Serve',
      footer_last_proj: 'Last Projects',
      footer_serv: 'Our Services',
      footer_copy: '© 2026 Awnalmaali for Real Estate Development &amp; Investment. All rights reserved.',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',

      // Accreditations
      accred_title: 'Certifications &amp; Accreditations',
    },
    ar: {
      // Nav
      nav_home: 'الرئيسية',
      nav_about: 'من نحن',
      nav_projects: 'المشاريع',
      logo_sub: 'عون للتطوير والاستثمار العقاري',
      nav_offers: 'الخدمات',
      nav_investors: 'المستثمرون',
      nav_suppliers: 'الموردون',
      nav_contact: 'تواصل معنا',
      logo_sub: 'للتطوير والاستثمار العقاري',

      // Home Hero
      hero_eyebrow: 'عون العقارية · جدة، المملكة العربية السعودية',
      hero_title_1: 'عون للتطوير ',
      hero_title_accent: ' والاستثمار العقاري',
      hero_desc: 'شريكك الموثوق في التطوير العقاري والاستثمار والتسويق وإدارة الممتلكات. نبني قيمة تدوم للأجيال.',
      hero_cta_1: 'استعرض المشاريع',
      hero_cta_2: 'تواصل معنا',
      scroll_label: 'اكتشف المزيد',

      // Stats
      stat_projects: 'مشروع قادم',
      stat_units: 'فرصة استثمارية',
      stat_clients: 'شريك وموثوق',

      // Sections
      featured_eyebrow: 'مشاريعنا',
      featured_title: 'مشاريع مميزة',
      featured_lead: 'اكتشف مشاريعنا الواعدة، و فرصنا الاستثمارية النوعية والمميزة في مدينة جدة',
      offers_eyebrow: 'خدماتنا',
      offers_title: 'ماذا نقدم',
      offers_lead: 'حلول عقارية متكاملة مبنية على الثقة والشفافية والاحترافية',
      about_eyebrow: 'من نحن',
      about_title: 'هويتنا',
      about_p1: 'عون يبقى.. ونماء يثمر. إن اختيار اسم "عون" جاء امتدادًا لهويتنا العائلية، ولكنه يحمل في جوهره معنى أعمق؛ أن نكون سندًا، ودعمًا، وشريكًا يعتمد عليه في بناء القرارات العقارية والاستثمارية. نحن نبني علاقات راسخة قائمة على الثقة وفهم احتياجات الإنسان قبل متطلبات السوق.',
      about_p2: 'نقدم حلولاً عقارية عالية الجودة مبنية على دراسة دقيقة وتحليل عميق للسوق، مع الالتزام بالشفافية والمصداقية كمعيار ثابت.',
      contact_eyebrow: 'تواصل معنا',
      contact_title: 'نحن هنا لمساعدتك — تواصل معنا اليوم',

      // Filter tabs
      filter_all: 'الكل',
      filter_dev: 'تطوير',
      filter_inv: 'استثمار',
      filter_mgmt: 'إدارة',

      // Badges
      badge_featured: 'مميز',
      badge_new: 'جديد',
      badge_exclusive: 'حصري',

      // Project locations
      loc_andalus: 'الأندلس، جدة',
      loc_madinah: 'طريق المدينة، جدة',
      loc_shati: 'حى الشاطئ، جدة',
      loc_hamra: 'الحمراء، جدة',
      loc_corniche: 'الكورنيش، جدة',
      loc_rawdah: 'الروضة، جدة',
      loc_shati_short: 'الشاطئ، جدة',

      // Project names
      proj_name_1: 'مشروع المحفظة',
      proj_name_2: 'مشروع البرج',
      proj_name_3: 'المبنى التجاري',
      proj_name_4: 'المبنى السكني',

      // Project prices
      price_coming_soon: 'قريباً',
      price_under_dev: 'قيد التطوير',
      price_exclusive: 'حصري',
      price_inv_opp: 'فرصة استثمارية',
      price_full_service: 'خدمة متكاملة',
      price_mgmt_ops: 'إدارة وتشغيل',
      price_under_study: 'قيد الدراسة',
      price_feasibility: 'مرحلة الجدوى',
      price_premium_opp: 'فرصة متميزة',
      price_active: 'نشط',
      price_under_mgmt: 'قيد الإدارة',

      // Project features
      feat_premium_res: 'وحدات سكنية فاخرة',
      feat_prime_loc: 'موقع متميز',
      feat_modern_design: 'تصميم حديث',
      feat_secure_inv: 'استثمار آمن',
      feat_verified_asset: 'أصل موثق',
      feat_expert_adv: 'استشارة خبراء',
      feat_full_mgmt: 'إدارة كاملة',
      feat_tenant_rel: 'علاقات المستأجرين',
      feat_247_support: 'دعم على مدار الساعة',
      feat_mixed_use: 'استخدامات متعددة',
      feat_strategic_loc: 'موقع استراتيجي',
      feat_high_roi: 'عائد استثمار مرتفع',
      feat_sea_view: 'إطلالة بحرية',
      feat_ready_now: 'جاهز الآن',
      feat_full_ops: 'تشغيل كامل',
      feat_tenant_mgmt: 'إدارة المستأجرين',
      feat_maint_incl: 'صيانة شاملة',

      // About page
      about_story: 'من نحن',
      about_story_title: 'هويتنا',
      about_name_meaning: 'إن اختيار اسم "عون" جاء امتدادًا لهويتنا العائلية، ولكنه يحمل في جوهره معنى أعمق؛ أن نكون سندًا، ودعمًا، وشريكًا يعتمد عليه في بناء القرارات العقارية والاستثمارية. نحن نبني علاقات راسخة قائمة على الثقة وفهم احتياجات الإنسان قبل متطلبات السوق.',
      about_vision_title: 'رؤيتنا',
      about_vision: 'أن نكون الكيان العقاري والاستثماري الأبرز في المملكة، عبر تقديم مشاريع نوعية تواكب مستهدفات رؤية 2030، وتصنع قيمة مستدامة تورث وتلهم الأجيال.',
      about_mission_title: 'رسالتنا',
      about_mission: 'تقديم حلول عقارية عالية الجودة مبنية على دراسة دقيقة وتحليل عميق للسوق، مع الالتزام بالشفافية والمصداقية كمعيار ثابت.',
      about_feat_trust: 'الثقة والشفافية',
      about_feat_trust_desc: 'وضوح كامل في كل خطوة — لا رسوم مخفية، ولا مفاجآت',
      about_feat_vision: 'متوافق مع رؤية 2030',
      about_feat_vision_desc: 'نساهم في التنمية العمرانية والنمو الاقتصادي للمملكة',
      about_feat_partner: 'شراكات استراتيجية',
      about_feat_partner_desc: 'بناء شبكة واسعة مع المستثمرين والمطورين والوسطاء',
      about_feat_quality: 'الاحترافية والجودة',
      about_feat_quality_desc: 'معايير أداء عالية وتنفيذ دقيق في كل خدمة',
      about_team_philosophy: 'في "عون"، نؤمن أن التميز تقوده الكفاءات النوعية والشغف البشري. يضم فريقنا نخبة من الخبراء، المهندسين، والمحللين الماليين الذين يتشاركون رؤية واحدة: "الالتزام بالوعود والوفاء بها قبل أي شيء".',
      about_team_lead: 'بإشراف وتوجيه من الرئيس التنفيذي الأستاذ عبدالله أحمد عبدالله آل عون القحطاني، تعمل كافة قطاعات الشركة بنظام تكاملي صارم يعتمد الدقة، الشفافية، والاحترافية كمعايير لا مساومة فيها. نحن نقود منظومة تصنع الأثر المستدام.',

      // Values
      values_title: 'قيمنا',
      values_sub: 'ما يدفعنا كل يوم',
      value_trust: 'الثقة',
      value_trust_desc: 'الثقة هي أساس كل علاقة نبنيها. نكسبها من خلال أفعال متسقة وصادقة.',
      value_transparency: 'الشفافية',
      value_transparency_desc: 'وضوح كامل في كل خطوة. لا رسوم مخفية، لا مفاجآت — مجرد تواصل صريح ومفتوح.',
      value_prof: 'الاحترافية',
      value_prof_desc: 'معايير أداء عالية ودقة وتميز في كل خدمة نقدمها.',
      value_partner: 'الشراكة',
      value_partner_desc: 'نؤمن بأن النجاح يُبنى من خلال التعاون والأهداف المشتركة والمنفعة المتبادلة.',
      value_sustain: 'الاستدامة',
      value_sustain_desc: 'بناء قيمة تدوم تدعم النمو والاستقرار والأثر الإيجابي للأجيال القادمة.',
      value_innov: 'الابتكار',
      value_innov_desc: 'تحويل الأفكار إلى فرص استثمارية حقيقية بأساليب حديثة وحلول ذكية.',

      // Team
      team_eyebrow: 'فريق العمل',
      team_title: 'سواعد تصنع المستقبل',
      team_lead: 'في عون، نؤمن أن التميز تقوده الكفاءات النوعية والشغف البشري',
      team_name: 'عبدالله أحمد عبدالله آل عون آل قحطاني',
      team_role: 'المؤسس ورئيس مجلس الإدارة',
      team_bio: 'يقود عون المعالي برؤية متجذرة في الثقة والابتكار والنمو المستدام. ملتزم ببناء كيان عقاري واستثماري رائد في المملكة العربية السعودية.',

      // Accreditations
      accred_jeddah: 'غرفة جدة',
      accred_jeddah_desc: 'رقم العضوية 669093 · السجل التجاري 4127',
      accred_vat: 'مسجل في ضريبة القيمة المضافة',
      accred_vat_desc: 'هيئة الزكاة والضريبة والجمارك · منذ 31/07/2024',
      accred_unified: 'الرقم الموحد',
      accred_unified_desc: '7054135533',
      accred_nat_addr: 'العنوان الوطني',
      accred_nat_addr_desc: 'JCAA9476 · طريق المدينة',

      // Contact page
      contact_info_sub: 'اكتب اهتماماتك وسنعود إليك بأفضل الفرص المناسبة من فريق المبيعات. نرد خلال ساعتين عمل.',
      contact_label_addr: 'العنوان',
      contact_label_phone: 'الهاتف',
      contact_label_email: 'البريد الإلكتروني',
      contact_label_website: 'الموقع الإلكتروني',
      contact_label_whatsapp: 'واتساب',
      contact_whatsapp_text: 'مراسلة شركة عون المعالي للتطوير والاستثمار العقاري عبر واتساب',
      contact_addr_val: '9476 طريق المدينة، حي الأندلس\nص.ب 4127، جدة 23326\nالمملكة العربية السعودية',
      contact_phone_val: '0558100341\n- 0500828856',
      contact_email_val: 'Info@awnalmaali.com',
      contact_website_val: 'awnalmaali.com',
      contact_form_title: 'طلب استشارة',
      contact_form_first: 'الاسم الأول',
      contact_form_last: 'اسم العائلة',
      contact_form_phone: 'رقم الهاتف',
      contact_form_email: 'البريد الإلكتروني',
      contact_form_interest: 'الخدمة المطلوبة',
      contact_form_budget: 'نطاق الميزانية (ريال)',
      contact_form_msg: 'الرسالة',
      contact_form_placeholder_first: 'الاسم الأول',
      contact_form_placeholder_last: 'اسم العائلة',
      contact_form_placeholder_phone: '+966 5X XXX XXXX',
      contact_form_placeholder_email: 'بريدك@email.com',
      contact_form_placeholder_msg: 'أخبرنا عن متطلباتك، أهدافك الاستثمارية، أو أي استفسارات...',
      contact_form_sel_default: 'اختر الخدمة',
      contact_form_sel_dev: 'التطوير العقاري',
      contact_form_sel_inv: 'الاستثمار العقاري',
      contact_form_sel_mgmt: 'إدارة الممتلكات',
      contact_form_sel_brok: 'التسويق والوساطة',
      contact_form_sel_cons: 'الاستشارات العقارية',
      contact_form_sel_other: 'استفسار آخر',
      contact_form_budget_default: 'اختر نطاق الميزانية',
      contact_form_budget_1: 'أقل من 1,000,000',
      contact_form_budget_2: '1,000,000 – 5,000,000',
      contact_form_budget_3: '5,000,000 – 20,000,000',
      contact_form_budget_4: '20,000,000 – 50,000,000',
      contact_form_budget_5: '50,000,000+',

      // Footer
      footer_ksa: 'المملكة العربية السعودية — جدة',
      footer_addr_1: '9476 طريق المدينة، حي الأندلس',
      footer_addr_2: 'ص.ب 4127، جدة 23326',
      footer_serv_dev: 'التطوير العقاري',
      footer_serv_inv: 'الاستثمار العقاري',
      footer_serv_mgmt: 'إدارة الممتلكات',
      footer_serv_brok: 'التسويق والوساطة',
      footer_serv_cons: 'الاستشارات العقارية',

      // Services / Offers page
      services_main_title: 'حلول متكاملة.. من الفكرة إلى الاستثمار الواقعي',
      services_hero_sub: 'نبني على الثقة والشفافية',
      services_eyebrow: 'حلول شاملة',
      services_intro: 'نقدم في "عون العقارية" منظومة شاملة من الخدمات المصممة لتلبية تطلعات الأفراد، الشركات، والمستثمرين بكفاءة وموثوقية عالية.',
      countdown_day: 'يوم',
      countdown_hour: 'ساعة',
      countdown_min: 'دقيقة',
      countdown_sec: 'ثانية',
      srv_badge_dev: 'تطوير',
      srv_tag_dev: 'التطوير العقاري',
      srv_title_dev: 'تطوير مشاريع متكامل',
      srv_desc_dev: 'تحويل الأفكار والفرص إلى مشاريع ومجمعات سكنية وتجارية نوعية ترتكز على الابتكار والجودة.',
      srv_badge_inv: 'استثمار',
      srv_tag_inv: 'الاستثمار العقاري',
      srv_title_inv: 'فرص استثمارية حصرية',
      srv_desc_inv: 'قراءة دقيقة للفرص الحصرية، وإدارة المخاطر بذكاء لضمان عوائد مستدامة ونمو آمن لرؤوس الأموال.',
      srv_badge_mgmt: 'إدارة',
      srv_tag_mgmt: 'إدارة الممتلكات',
      srv_title_mgmt: 'عمليات عقارية شاملة',
      srv_desc_mgmt: 'الحفاظ على الأصول العقارية وتطويرها بما يضمن استدامة قيمتها الاستثمارية على المدى الطويل.',
      srv_badge_mktg: 'تسويق',
      srv_tag_mktg: 'التسويق والوساطة العقارية',
      srv_title_mktg: 'وساطة عقارية احترافية',
      srv_desc_mktg: 'دعم منظومة البيع والشراء والتأجير بأدوات تسويقية متطورة وقواعد بيانات متخصصة تخدم العملاء والوسطاء.',
      srv_badge_cons: 'استشارات',
      srv_tag_cons: 'الاستشارات والمتابعة الإجرائية',
      srv_title_cons: 'استشارات خبراء ودعم قانوني',
      srv_desc_cons: 'تقديم مشورة مبنية على خبرة، وتسهيل عمليات التملك والاستثمار للمواطنين والمقيمين والمستثمرين الأجانب قانونياً وإجرائياً.',
      srv_badge_fin: 'تمويل',
      srv_tag_fin: 'حلول تمويلية',
      srv_title_fin: 'حلول تمويلية متكاملة',
      srv_desc_fin: 'نربط العملاء بالمؤسسات التمويلية المناسبة ونقدم حلول تمويل مخصصة تتوافق مع احتياجاتهم وأهدافهم الاستثمارية. شراكاتنا مع البنوك السعودية الرائدة تضمن أسعاراً تنافسية ومعالجة سلسة.',
      banner_commit: 'التزامنا',
      banner_commit_title: 'الثقة والشفافية أولاً',
      banner_commit_desc: 'نلتزم بالشفافية الكاملة والاحترافية والجودة في كل خدمة نقدمها. كل علاقة تُبنى على الثقة، وكل وعد يُحترم.',
      banner_vision: 'رؤية 2030',
      banner_vision_title: 'متوافق مع الأهداف الوطنية',
      banner_vision_desc: 'يساهم عملنا في التنمية العمرانية والنمو الاقتصادي للمملكة، دعماً للأهداف الطموحة لرؤية 2030 من خلال التطوير العقاري المستدام والاستثمار.',

      // Investors page
      inv_eyebrow: 'الشراكة الاستراتيجية',
      inv_title: 'نبتكر الفرص، لنمو يثمر',
      inv_vision: 'نحن في "عون" نرى الاستثمار من منظور الشراكة وتكامل المصالح؛ فالنجاح الحقيقي يُبنى بالتعاون. نقوم بتحليل عميق للسوق العقاري واتخاذ قرارات استثمارية مدروسة بهدف حماية وتنمية الأصول وتخفيف المخاطر بذكاء.',
      inv_offer_title: 'ماذا نقدم لشركائنا المستثمرين؟',
      inv_offer_1: 'فرص حصرية: توفير نوافذ استثمارية واعدة ونوعية في أكثر المناطق حيوية (منطقة مكة المكرمة).',
      inv_offer_2: 'حلول تمويلية: ربط المستثمرين والمشاريع بالجهات التمويلية المناسبة بما يتوافق مع الأهداف الاستثمارية.',
      inv_offer_3: 'شفافية تامة: تقارير دورية ووضوح كامل في كل خطوة إجرائية أو مالية، لبناء علاقة طويلة الأمد عنوانها الثقة المتبادلة.',

      // Suppliers page
      sup_hero_eyebrow: 'شركاء في الجودة',
      sup_hero_title: 'بوابة الموردين',
      sup_hero_sub: 'بناء واستدامة — انضم إلى شبكتنا',
      sup_eyebrow: 'شركاء في الجودة',
      sup_title: 'بناء واستدامة — بوابة الموردين',
      sup_intro: 'لأننا نلتزم بتقديم أعلى مستويات الكفاءة والموثوقية، فإننا نعتبر شبكة الموردين والمقاولين لدينا جزءاً لا يتجزأ من هويتنا وجدارتنا العقارية. نحن نبحث دائماً عن الكيانات التي تشاركنا قيم "الجودة، والالتزام، والاستدامة" لتحويل المخططات إلى معالم حية على أرض الواقع.',
      sup_criteria: 'ترحب بوابة الموردين في "عون المعالي" بطلبات التأهيل من الشركات والمؤسسات المتخصصة في مواد البناء، المقاولات، الحلول التقنية، والهندسية، وفق آليات تقييم عادلة وواضحة تضمن تكافؤ الفرص وتكامل المصالح المستدامة.',
      sup_cta: 'تقديم طلب تأهيل',

      // Projects CTA
      proj_cta_eyebrow: 'تبحث عن فرصة محددة؟',
      proj_cta_title: 'لدينا فرص استثمارية حصرية متاحة',

      // Index offers preview
      offer_dev: 'تطوير',
      offer_dev_project: 'التطوير العقاري',
      offer_dev_desc: 'تطوير مشاريع متكامل من دراسات الجدوى والتصميم حتى البناء والتسليم، متوافق مع احتياجات السوق ورؤية 2030.',
      offer_inv: 'استثمار',
      offer_inv_project: 'الاستثمار العقاري',
      offer_inv_desc: 'فرص استثمارية حصرية وإدارة محافظ واستشارات استراتيجية للأفراد والمؤسسات الباحثة عن عوائد مستدامة.',
      offer_mgmt: 'إدارة',
      offer_mgmt_project: 'إدارة الممتلكات',
      offer_mgmt_desc: 'عمليات عقارية شاملة وعلاقات مستأجرين وصيانة ودعم ما بعد البيع لتعظيم قيمة الأصول وراحة المالك.',
      btn_see_all: 'عرض جميع الخدمات',

      // Buttons
      btn_view_all: 'عرض جميع المشاريع',
      btn_book_now: 'استفسر الآن',
      btn_view_details: 'عرض التفاصيل',
      btn_save: 'حفظ',
      btn_learn_more: 'اعرف المزيد',
      btn_send: 'إرسال الرسالة',
      btn_request: 'طلب استشارة',
      btn_inquire: 'استفسر',

      // Footer
      footer_tagline: 'شريكك الموثوق في التطوير العقاري والاستثمار وإدارة الممتلكات في جدة.',
      footer_quick: 'روابط سريعة',
      footer_types: 'خدماتنا',
      footer_areas: 'المناطق التي نخدمها',
      footer_last_proj: 'آخر المشاريع',
      footer_serv: 'خدماتنا',
      footer_copy: '© 2026 عون المعالي للتطوير والاستثمار العقاري. جميع الحقوق محفوظة.',
      footer_privacy: 'سياسة الخصوصية',
      footer_terms: 'شروط الخدمة',

      // Accreditations
      accred_title: 'الشهادات والاعتمادات',
    }
  };

  // ─── Language State ─────────────────────────────────────────────────────────

  let currentLang = localStorage.getItem('alnoor_lang') || 'ar';

  function getLangRoot() { return document.documentElement; }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('alnoor_lang', lang);

    const root = getLangRoot();
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (TRANS[lang] && TRANS[lang][key] !== undefined) {
        el.textContent = TRANS[lang][key];
      }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active-lang', btn.dataset.lang === lang);
    });
  }

  function initLang() {
    applyLang(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  }

  // ─── Navigation ─────────────────────────────────────────────────────────────

  function initNav() {
    const header = document.getElementById('header');
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    const closeBtn = document.getElementById('navClose');
    const overlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!header) return;

    // Scroll → sticky light header
    const onScroll = () => {
      header.classList.toggle('light', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    const openMenu = () => { menu?.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const closeMenu = () => { menu?.classList.remove('open'); document.body.style.overflow = ''; };

    toggle?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (
        (currentPage === '' || currentPage === 'index.html') && href.includes('index') ||
        href.includes(currentPage.replace('.html', ''))
      ) {
        link.classList.add('active');
      }
    });
  }

  // ─── Scroll Reveal ───────────────────────────────────────────────────────────

  function initScrollReveal() {
    const targets = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.12 }
    );

    targets.forEach(t => io.observe(t));
  }

  // ─── Animated Counters ───────────────────────────────────────────────────────

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + '+';
      if (current < target) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            animateCount(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(c => io.observe(c));
  }

  // ─── Favourite (Heart) Button ────────────────────────────────────────────────

  function initFavButtons() {
    document.querySelectorAll('.prop-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('loved');

        // Burst micro-animation
        btn.style.transform = 'scale(1.4)';
        setTimeout(() => { btn.style.transform = ''; }, 220);
      });
    });
  }

  // ─── Gallery Filter ──────────────────────────────────────────────────────────

  function initFilter() {
    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.prop-card[data-cat]');
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const cat = tab.dataset.cat;

        cards.forEach((card, i) => {
          const show = cat === 'all' || card.dataset.cat === cat;
          card.style.display = show ? 'block' : 'none';
          if (show) {
            card.style.animation = `none`;
            card.offsetHeight; // reflow
            card.style.animation = `fadeIn 0.4s ease ${i * 60}ms both`;
          }
        });
      });
    });
  }

  // ─── Countdown Timer ─────────────────────────────────────────────────────────

  function initCountdown() {
    const wrap = document.getElementById('countdown');
    if (!wrap) return;

    // Count to a fixed future date (7 days from a fixed anchor)
    const target = new Date();
    target.setDate(target.getDate() + 7);
    target.setHours(23, 59, 59, 0);

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    function pad(n) { return String(n).padStart(2, '0'); }

    function update() {
      const diff = target - Date.now();
      if (diff <= 0) {
        [daysEl, hoursEl, minsEl, secsEl].forEach(el => { if (el) el.textContent = '00'; });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      if (daysEl) daysEl.textContent = pad(d);
      if (hoursEl) hoursEl.textContent = pad(h);
      if (minsEl) minsEl.textContent = pad(m);
      if (secsEl) secsEl.textContent = pad(s);
    }

    update();
    setInterval(update, 1000);
  }

  // ─── Contact Form ────────────────────────────────────────────────────────────

  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;

      btn.textContent = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';
      btn.disabled = true;

      try {
        const data = new FormData(form);
        data.append('_subject', currentLang === 'ar' ? 'استفسار جديد من موقع عون المعالي' : 'New inquiry from Awnalmaali website');

        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          btn.textContent = currentLang === 'ar' ? 'تم الإرسال!' : 'Sent!';
          btn.style.background = 'var(--success)';
          form.reset();
        } else {
          btn.textContent = currentLang === 'ar' ? 'فشل الإرسال' : 'Failed';
          btn.style.background = 'var(--error)';
        }
      } catch {
        btn.textContent = currentLang === 'ar' ? 'خطأ في الاتصال' : 'Network error';
        btn.style.background = 'var(--error)';
      }

      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    });
  }

  // ─── Back to Top ─────────────────────────────────────────────────────────────

  function initBackTop() {
    const btn = document.getElementById('backTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ─── Smooth Scroll for Hash Links ───────────────────────────────────────────

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ─── Card Tilt (subtle 3D on mouse move) ────────────────────────────────────

  function initCardTilt() {
    document.querySelectorAll('.prop-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rotX = ((e.clientY - cy) / (rect.height / 2)) * -5;
        const rotY = ((e.clientX - cx) / (rect.width / 2)) * 5;
        card.style.transform = `translateY(-12px) scale(1.01) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ─── Page Transition Fade ────────────────────────────────────────────────────

  function initPageFade() {
    if (document.visibilityState === 'hidden') return;
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.35s ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { document.body.style.opacity = '1'; });
    });
  }

  window.addEventListener('pageshow', e => {
    if (e.persisted) {
      document.body.style.opacity = '1';
    }
  });

  // ─── Init ────────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', () => {
    initLang();
    initNav();
    initScrollReveal();
    initCounters();
    initFavButtons();
    initFilter();
    initCountdown();
    initContactForm();
    initBackTop();
    initSmoothScroll();
    initCardTilt();
    initPageFade();
  });

})();
