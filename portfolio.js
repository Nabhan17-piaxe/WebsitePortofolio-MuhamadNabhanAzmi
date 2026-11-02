(function () {
      'use strict';

      const IMG_HRD_MARSEL = "assets/opt_hrd_marsel.jpg";
      const IMG_HRD_CROP = "assets/opt_hrd_crop.jpg";
      const IMG_KARSA_DASHBOARD = "assets/opt_karsa_dashboard.jpg";
      const IMG_AGV = "assets/opt_user_agv.jpg";
      const IMG_PJU = "assets/opt_user_pju7.jpg";
      const IMG_SPK_BELFEST = "assets/opt_spk_belfest.jpg";
      const IMG_SPK_PRESIDEN = "assets/opt_spk_presiden.jpg";
      const IMG_SPK_PKKMB = "assets/opt_spk_pkkmb.jpg";
      const IMG_SPK_MODERATOR = "assets/opt_spk_moderator.jpg";
      const IMG_SPK_BATAREL = "assets/opt_spk_batarel.jpg";
      const IMG_SPK_GRAND = "assets/opt_spk_grand.jpg";
      const IMG_SPK_SENSOR = "assets/opt_spk_sensor.jpg";
      const IMG_SPK_EGOTS = "assets/opt_spk_egots.jpg";
      const IMG_CERT_SFL2026 = "assets/opt_cert_sfl2026.jpg";
      const IMG_CERT_GSA2026 = "assets/opt_cert_gsa2026.jpg";
      const IMG_CERT_GOOGLE_AI = "assets/opt_cert_google_ai.jpg";
      const IMG_CERT_ASLAB_SISDIG = "assets/opt_cert_aslab_sisdig.jpg";
      const IMG_CERT_ASLAB_FISIKA = "assets/opt_cert_aslab_fisika.jpg";
      const IMG_CERT_ASLAB_PBL = "assets/opt_cert_aslab_pbl.jpg";
      const IMG_CERT_IBM_OPT = "assets/opt_cert_ibm_opt.jpg";
      const IMG_CERT_IBM_MODELS = "assets/opt_cert_ibm_models.jpg";
      const IMG_CERT_IBM_GENAI = "assets/opt_cert_ibm_genai.jpg";
      const IMG_TRANSHEALTH = "assets/opt_user_transhealth.jpg";
      const IMG_SUMO = "assets/opt_user_sumo.jpg";
      const IMG_PCB = "assets/opt_user_pcb.jpg";
      const IMG_TRANSPORTER = "assets/opt_user_transporter.jpg";
      const IMG_ESSAY = "assets/opt_user_essay.jpg";
      const IMG_DOME_PROTO = "assets/opt_user_dome_proto.jpg";
      const FALLBACK_DOME = "assets/opt_dome.jpg";
      const FALLBACK_ROBOT = "assets/opt_robot.jpg";
      const FALLBACK_SENSOR = "assets/opt_sensor.jpg";

      // All assets served locally from assets/

      const AVATAR_SVG_URI = "data:image/svg+xml;utf8," + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0068d9"/><stop offset="100%" stop-color="#003d82"/></linearGradient></defs>' +
        '<rect width="200" height="200" rx="36" fill="url(#g)"/>' +
        '<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="68" font-weight="800">MN</text>' +
        '</svg>'
      );

      // 10 Technical Tools in Slide 2 (Leadership & Wokwi removed as requested)
      const SKILLS_JSON = [
        { name: "Proteus", icon: "assets/icon_proteus.png" },
        { name: "Fusion 360", icon: "assets/icon_fusion360.png" },
        { name: "EasyEDA", icon: "assets/icon_easyeda.png" },
        { name: "Arduino", icon: "https://img.icons8.com/color/96/000000/arduino.png" },
        { name: "C / C++", icon: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png" },
        { name: "Python", icon: "https://img.icons8.com/color/96/000000/python.png" },
        { name: "IoT", icon: "https://img.icons8.com/fluency/96/000000/internet-of-things.png" },
        { name: "Ultimaker Cura", icon: "https://img.icons8.com/color/96/000000/3d-printer.png" },
        { name: "Google Workspace", icon: "https://img.icons8.com/color/96/000000/google-logo.png" },
        { name: "Microsoft Office", icon: "https://img.icons8.com/color/96/000000/microsoft.png" }
      ];

      // Typed Specialties (Smart City Innovations replaced with Intelligent Control System)
      const TYPED_STRINGS = {
        id: [
          "Intelligent Control System",
          "Internet of Things (IoT)",
          "Hardware Engineering",
          "Riset & Development"
        ],
        en: [
          "Intelligent Control System",
          "Internet of Things (IoT)",
          "Hardware Engineering",
          "Research & Development"
        ]
      };

      const I18N = {
        id: {
          nav_home: "Home",
          nav_about: "About",
          nav_projects: "Projects",
          nav_speaking: "Gallery",
          nav_credentials: "Achievements",
          nav_experience: "Experience",
          nav_skills: "Skills",
          nav_contact: "Contact",
          btn_view_cv: "Lihat CV",
          hero_badge: "TEKNIK ELEKTRO · UPNVJ",
          hero_subtitle: "Internet of Things, Robotika & Intelligent Control System.",
          hero_focus_prefix: "Fokus Keahlian:",
          hero_card_sub: "Engineering & leadership with purpose.",
          cta_projects: "Lihat Proyek",
          cta_cv: "Buka Dokumen CV",
          cta_connect: "Mari Terhubung",
          stat_gpa_label: "GPA / IPK",
          stat_gpa_sub: "S-1 Teknik Elektro UPNVJ",
          stat_lead_label: "Leadership",
          stat_lead_val: "Head of HRD, KSM IoT",
          stat_lead_sub: "& Intelligent Control Team",
          stat_impact_label: "Credential",
          stat_impact_val: "Asisten Lab",
          stat_impact_sub: "Teknik Elektro UPNVJ (>100 Mhs)",
          profile_status: "Open for collaboration",
          btn_switch_photo: "Ganti Foto ↻",
          focus_1_title: "Internet of Things (IoT) & Intelligent System",
          focus_1_desc: "Riset teknologi tepat guna, Smart Hybrid Drying Dome (Top 1 SDGs), dan Intelligent Control System Research Team.",
          focus_2_title: "Robotics, 3D CAD & PCB Fabrication",
          focus_2_desc: "Pengembangan Robot Sumo ESP, Robot Transporter nirkabel, Omni-Wheel AGV, desain 3D Fusion 360, serta desain & etching PCB.",
          focus_3_title: "Tech Leadership, Educator & Public Speaking",
          focus_3_desc: "Head of HRD KSM IoT, Google Student Ambassador 2026, Asisten Lab, serta Pembicara & MC acara teknik.",
          btn_copy_email: "Salin Email",
          nada_about_heading: "ABOUT ME",
          nada_about_p1: "Saya adalah mahasiswa S-1 Teknik Elektro di Universitas Pembangunan Nasional \"Veteran\" Jakarta dengan minat kuat pada solusi berbasis teknologi tepat guna, Internet of Things (IoT), robotika, Intelligent Control System, riset inovasi, dan komunikasi publik.",
          nada_about_p2: "Saat ini menjabat sebagai Head of Department Human Resource Development (HRD) di KSM Internet of Things UPNVJ, anggota Intelligent Control System Research Team, serta Asisten Laboratorium Teknik Elektro. Saya berpengalaman dalam perancangan 3D (Fusion 360), desain & etching PCB, penulisan esai ilmiah kompetitif, serta memandu acara akademik sebagai Pembicara, Moderator, dan Master of Ceremonies (MC).",
          nada_col1_title: "ELECTRICAL & ROBOTICS",
          nada_col1_sub: "Engineering Field",
          nada_col2_title: "IOT & INTELLIGENT CONTROL",
          nada_col2_sub: "Focus Area",
          nada_col3_title: "HRD & GSA LEADERSHIP",
          nada_col3_sub: "Leadership Role",
          sec_projects_title: "Featured Engineering, Robotics & Intelligent Control Projects",
          sec_projects_sub: "Proyek sistem kendali cerdas, ekosistem IoT & Edge AI, robotika AGV/Sumo/Transporter, desain PCB, serta riset teknologi tepat guna.",
          btn_auto: "Auto",
          btn_view_grid: "Tampilan Grid",
          btn_view_carousel: "Tampilan Carousel",
          filter_all: "Semua Proyek (10)",
          filter_iot: "Embedded & Smart IoT",
          filter_hardware: "Robotika & Desain PCB",
          filter_ai: "AI, Fuzzy & Control",
          filter_impact: "Inovasi & Publikasi",
          sec_exp_title: "Pengalaman Riset, Organisasi & Akademik",
          sec_exp_sub: "Rekam jejak di Intelligent Control System Research Team, KSM IoT UPNVJ, Google Indonesia, serta asistensi pengajaran di Laboratorium Teknik Elektro.",
          exp_filter_all: "Semua Peran",
          exp_filter_tech: "Riset & Akademik",
          exp_filter_lead: "Kepemimpinan & Komunitas",
          edu_badge: "PENDIDIKAN FORMAL",
          edu_upnvj_deg: "S-1 Teknik Elektro (Electrical Engineering)",
          edu_quote: "\"Pendidikan bukan sekadar mempelajari fakta, tetapi melatih pikiran untuk berpikir.\"",
          edu_upnvj_notes: "Fokus studi: Internet of Things (IoT), Robotika, Intelligent Control System, Pengukuran Besaran Listrik, dan Sistem Digital.",
          edu_sma_deg: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
          edu_sma_notes: "Ketua Paskibra (2022–2023) & Ketua Badan Pengawas Organisasi (2023–2024).",
          arch_card_badge: "DOKUMEN CV & RESUME",
          arch_card_title: "CV Interaktif (ID / EN) & Google Drive",
          arch_card_desc: "Cetak CV dwibahasa langsung dari halaman ini atau buka dokumen Resume PDF di Google Drive.",
          btn_open_printable_cv: "Buka & Cetak CV Lengkap",
          btn_open_drive_cv: "Buka PDF Resume (Google Drive)",
          sec_speak_title: "Public Speaking, Master of Ceremonies & Volunteer Operations",
          sec_speak_sub: "Setiap peran Pembicara IoT, Moderator, Master of Ceremonies (MC), dan Volunteer Operasional ditampilkan secara terpisah berdasarkan masing-masing acara.",
          sec_skills_title: "Disiplin Teknis & Kapabilitas Terhubung",
          sec_skills_sub: "Tiga pilar kapabilitas utama yang menghubungkan sistem tertanam & kendali cerdas (IoT & Intelligent Control), fabrikasi perangkat keras (3D CAD & PCB), dan kepemimpinan organisasi.",
          skill_col1_title: "IoT, Intelligent Control & Robotics",
          skill_col1_desc: "Pengembangan sistem mikrokontroler ESP & Arduino, algoritma kendali Logika Fuzzy & Dynamic Programming, navigasi AGV Omni-Wheel, serta integrasi sensor-aktuator dan Edge AI.",
          skill_col2_title: "Hardware Prototyping, 3D CAD & PCB",
          skill_col2_desc: "Perancangan mekanik 3D dan pencetakan 3D (Fusion 360 & Ultimaker Cura), desain skematik & simulasi rangkaian (Proteus & EasyEDA), hingga fabrikasi/etching fisik Printed Circuit Board (PCB).",
          skill_col3_title: "Tech Leadership, Education & Operations",
          skill_col3_desc: "Kepemimpinan SDM & kurikulum Design Thinking di KSM IoT, asistensi laboratorium Teknik Elektro (>100 praktikan), edukator IoT & Master of Ceremonies (MC), serta operasional acara berskala besar.",
          sec_cred_title: "Sertifikasi Teknis, Penghargaan & Mandat Akademik",
          sec_cred_sub: "Kredensial sertifikasi AI & rekayasa, capaian kompetisi inovasi dan robotika, serta mandat kepemimpinan riset dan laboratorium.",
          cred_col1_tag: "PENGHARGAAN & KOMPETISI",
          award_1_title: "Top 1 Tim SDGs Future Leaders Regional Jakarta–Tangerang (2026)",
          award_1_desc: "Astra Honda SDGs Future Leaders (Proyek KARSA) — \"Sistem Pengering Hibrida Cerdas Penyelamat Nilai Ekonomi Kopi Desa Talang Empat di Era Krisis Iklim\".",
          award_2_title: "Finalis Kompetisi Esai Ilmiah Nasional IFF (2026)",
          award_2_desc: "Karya: \"Eco-Anxiety ke Eco-Preneur: Mengubah Kecemasan Generasi Z Menjadi Kekuatan Ekonomi Hijau Menuju Indonesia Emas 2045\".",
          award_3_title: "Top 4 Kompetisi Robot Sumo FIK FAIR UPNVJ",
          award_3_desc: "BEM FIK UPN \"Veteran\" Jakarta — Pengembangan perangkat keras & sistem kendali Robot Sumo berbasis ESP.",
          award_4_title: "Best of Staff Division — Bela Negara Festival Vol. 7",
          award_4_desc: "Penghargaan staf terbaik Divisi General Support dalam operasional festival berskala ±9.000 pengunjung.",
          cred_col2_tag: "SERTIFIKASI TEKNIS",
          cert_gallery_badge: "DOKUMEN SERTIFIKAT RESMI · MUHAMAD NABHAN AZMI (9 SERTIFIKAT TERVERIFIKASI)",
          cert_gallery_hint: "Klik kartu untuk memperbesar sertifikat atau membuka dokumen asli di Google Drive",
          cert_gsa_desc: "No. GSA26/B1/GRAD/XXVI-01/GSAID261143 — Terpilih dari 81.000 mahasiswa nasional dalam kepemimpinan adopsi Google AI di lingkungan kampus.",
          cert_1_desc: "No. 01813/H8/CSR/MBA2/IV/2026 — Hacktiv8 Indonesia × AVPN & Google.org (Maju Bareng AI, 10 Jam Pembelajaran, 28 Apr 2026).",
          cert_2_desc: "Code Generation & Optimization Using IBM Granite (MDL-566), IBM Granite Models for Software Development (MDL-567), dan Use Generative AI for Software Development (MDL-504).",
          cert_3_title: "Sertifikat Asisten Praktikum Fakultas Teknik UPNVJ (3 Sertifikat)",
          cert_3_desc: "Sistem Digital (645/UN61/SERTF/2026/FT), Fisika (626/UN61/SERTF/2026/FT), & Pengukuran Besaran Listrik (SGAS/155.1/UN61/2025/FT).",
          cred_col3_tag: "MANDAT RISET & LABORATORIUM",
          mandate_2_title: "Intelligent Control System Research Team",
          mandate_2_desc: "Tim riset sistem kendali cerdas (Sep 2026 – Sekarang) yang mengembangkan navigasi AGV Omni-Wheel berbasis Dynamic Programming, PJU Surya Logika Fuzzy, dan sistem otonom.",
          mandate_3_title: "Asisten Laboratorium Teknik Elektro UPNVJ",
          mandate_3_desc: "Membimbing praktikum Pengukuran Besaran Listrik, Fisika Dasar, dan Sistem Digital bagi lebih dari 100 mahasiswa Teknik Elektro (Agu 2025 – Sekarang).",
          mandate_1_desc: "Memimpin pengembangan SDM dan riset inovasi IoT di KSM IoT UPNVJ (Jan 2026 – Sekarang) serta menuntaskan mandat Google Student Ambassador (Apr – Jul 2026).",
          contact_got: "Got ",
          contact_idea: "An Idea?",
          sec_contact_title: "Let's Connect & Collaborate!",
          sec_contact_sub: "Terima kasih telah berkunjung! Saya selalu terbuka untuk peluang baru dalam menerapkan keahlian rekayasa IoT, robotika, dan sistem kendali cerdas pada proyek-proyek inovatif.",
          contact_discuss: "Mari diskusikan bagaimana kita dapat bekerja sama.",
          contact_regards: "Warm regards,",
          email_menu_send: "Kirim Email Langsung",
          email_menu_form: "Tulis Pesan Cepat di Sini",
          form_title: "Kirim Pesan Cepat",
          form_name_label: "Nama / Instansi",
          form_topic_label: "Topik Kolaborasi",
          form_msg_label: "Pesan Singkat",
          form_submit_btn: "Buka Draft Email & Salin Pesan",
          footer_note: "Nabhan's Portofolio — IoT, Robotics & Intelligent Control System",
          footer_top: "Kembali ke atas ↑",
          modal_highlights_title: "Detail Implementasi & Capaian",
          btn_close: "Tutup",
          btn_print_cv: "Cetak / Simpan PDF",
          btn_detail: "Lihat Detail →"
        },
        en: {
          nav_about: "About",
          nav_projects: "Projects",
          nav_experience: "Experience",
          nav_speaking: "Speaking",
          nav_skills: "Skills",
          nav_credentials: "Credentials",
          nav_contact: "Contact",
          btn_view_cv: "View CV",
          hero_badge: "ELECTRICAL ENGINEERING · UPNVJ",
          hero_subtitle: "Internet of Things, Robotics & Intelligent Control System.",
          hero_focus_prefix: "Core Focus:",
          hero_card_sub: "Engineering & leadership with purpose.",
          cta_projects: "View projects",
          cta_cv: "View CV",
          cta_connect: "Let's connect",
          stat_gpa_label: "GPA / IPK",
          stat_gpa_sub: "B.Eng. Electrical Engineering",
          stat_lead_label: "Leadership",
          stat_lead_val: "Head of HRD, KSM IoT",
          stat_lead_sub: "& Intelligent Control Team",
          stat_impact_label: "Credential",
          stat_impact_val: "Lab Assistant",
          stat_impact_sub: "Electrical Eng. UPNVJ (100+ Students)",
          profile_status: "Open for collaboration",
          btn_switch_photo: "Switch Photo ↻",
          focus_1_title: "Internet of Things (IoT) & Intelligent System",
          focus_1_desc: "Appropriate technology research, Smart Hybrid Drying Dome (Top 1 SDGs), and Intelligent Control System Research Team.",
          focus_2_title: "Robotics, 3D CAD & PCB Fabrication",
          focus_2_desc: "ESP-based Sumo Robot, wireless Transporter Robot, Omni-Wheel AGV, 3D modeling in Fusion 360, and custom PCB design & etching.",
          focus_3_title: "Tech Leadership, Educator & Public Speaking",
          focus_3_desc: "Head of HRD at KSM IoT, 2026 Google Student Ambassador, Lab Assistant, and IoT Speaker & MC.",
          btn_copy_email: "Copy Email",
          nada_about_heading: "ABOUT ME",
          nada_about_p1: "I am an undergraduate Electrical Engineering student at Universitas Pembangunan Nasional \"Veteran\" Jakarta, with a strong interest in technology-based solutions, Internet of Things (IoT), robotics, Intelligent Control Systems, research, and public communication.",
          nada_about_p2: "Currently serving as the Head of the Human Resource Development (HRD) Department at KSM Internet of Things, member of the Intelligent Control System Research Team, and Electrical Engineering Laboratory Assistant, I have hands-on experience in 3D CAD prototyping (Fusion 360), custom PCB design, competitive essay writing, and public speaking (MC & Moderator).",
          nada_col1_title: "ELECTRICAL & ROBOTICS",
          nada_col1_sub: "Engineering Field",
          nada_col2_title: "IOT & INTELLIGENT CONTROL",
          nada_col2_sub: "Focus Area",
          nada_col3_title: "HRD & GSA LEADERSHIP",
          nada_col3_sub: "Leadership Role",
          sec_projects_title: "Featured Engineering, Robotics & Intelligent Control Projects",
          sec_projects_sub: "Intelligent control systems, Edge AI & IoT ecosystems, AGV/Sumo/Transporter robotics, custom PCB fabrication, and appropriate technology research.",
          btn_auto: "Auto",
          btn_view_grid: "Grid View",
          btn_view_carousel: "Carousel View",
          filter_all: "All projects (10)",
          filter_iot: "Embedded & Smart IoT",
          filter_hardware: "Robotics & PCB Design",
          filter_ai: "AI, Fuzzy & Control",
          filter_impact: "Innovation & Publications",
          sec_exp_title: "Research, Organizational & Academic Experience",
          sec_exp_sub: "Track record across the Intelligent Control System Research Team, KSM IoT UPNVJ, Google Indonesia, and undergraduate laboratory instruction.",
          exp_filter_all: "All Roles",
          exp_filter_tech: "Research & Academic",
          exp_filter_lead: "Leadership & Community",
          edu_badge: "FORMAL EDUCATION",
          edu_upnvj_deg: "B.Eng. in Electrical Engineering (S-1 Teknik Elektro)",
          edu_quote: "\"Education is not the learning of facts, but the training of the mind to think.\"",
          edu_upnvj_notes: "Coursework focus: Internet of Things (IoT), Robotics, Intelligent Control Systems, Electrical Measurement, and Digital Systems.",
          edu_sma_deg: "Mathematics and Natural Sciences (MIPA)",
          edu_sma_notes: "Chairman of Paskibra (2022–2023) & Head of Organizational Supervisory Board (2023–2024).",
          arch_card_badge: "CV & RESUME DOCUMENTS",
          arch_card_title: "Interactive CV (ID / EN) & Google Drive PDF",
          arch_card_desc: "Print bilingual CVs directly from this page or open your Google Drive Resume PDF.",
          btn_open_printable_cv: "Open & Print Full CV",
          btn_open_drive_cv: "Open Resume PDF (Google Drive)",
          sec_speak_title: "Public Speaking, Master of Ceremonies & Volunteer Operations",
          sec_speak_sub: "Each IoT Speaker, Moderator, Master of Ceremonies (MC), and Volunteer Operations engagement is showcased individually by event.",
          sec_skills_title: "Connected Technical Capabilities",
          sec_skills_sub: "Three core capability pillars connecting embedded systems & intelligent control, 3D CAD & PCB fabrication, and organizational leadership.",
          skill_col1_title: "IoT, Intelligent Control & Robotics",
          skill_col1_desc: "ESP & Arduino microcontroller development, Fuzzy Logic & Dynamic Programming control algorithms, Omni-Wheel AGV navigation, and Edge AI integration.",
          skill_col2_title: "Hardware Prototyping, 3D CAD & PCB",
          skill_col2_desc: "3D mechanical CAD and 3D printing (Fusion 360 & Ultimaker Cura), circuit simulation & PCB layout (Proteus & EasyEDA), and physical PCB etching.",
          skill_col3_title: "Tech Leadership, Education & Operations",
          skill_col3_desc: "HRD leadership & Design Thinking syllabus at KSM IoT, Electrical Engineering laboratory instruction (100+ students), IoT educator & MC, and large-scale event operations.",
          sec_cred_title: "Technical Certifications, Honors & Academic Mandates",
          sec_cred_sub: "Industry AI certifications, national/regional robotics and innovation awards, and research/laboratory mandates.",
          cred_col1_tag: "HONORS & COMPETITIONS",
          award_1_title: "Top 1 Team — SDGs Future Leaders Regional Jakarta–Tangerang (2026)",
          award_1_desc: "Astra Honda SDGs Future Leaders (Project KARSA) — \"Smart Hybrid Drying System Preserving Coffee Economic Value in Talang Empat Village\".",
          award_2_title: "National Essay Finalist — IFF (2026)",
          award_2_desc: "Paper: \"From Eco-Anxiety to Eco-Preneur: Transforming Gen-Z Climate Concern into Green Economic Power Toward Golden Indonesia 2045\".",
          award_3_title: "Top 4 Sumo Robot Competition — FIK FAIR UPNVJ",
          award_3_desc: "BEM FIK UPN \"Veteran\" Jakarta — Hardware development & wireless ESP control for competitive Sumo Robot.",
          award_4_title: "Best of Staff Division — Bela Negara Festival Vol. 7",
          award_4_desc: "Recognized as top performer in General Support Division across ±9,000 festival attendees.",
          cred_col2_tag: "TECHNICAL CERTIFICATIONS",
          cert_gallery_badge: "OFFICIAL CERTIFICATES · MUHAMAD NABHAN AZMI (9 VERIFIED CERTIFICATES)",
          cert_gallery_hint: "Click any card to enlarge the certificate or open the original file on Google Drive",
          cert_gsa_desc: "No. GSA26/B1/GRAD/XXVI-01/GSAID261143 — Selected from 81,000 students nationwide for leadership in championing Google AI adoption on campus.",
          cert_1_desc: "No. 01813/H8/CSR/MBA2/IV/2026 — Hacktiv8 Indonesia × AVPN & Google.org (Maju Bareng AI, 10 Learning Hours, 28 Apr 2026).",
          cert_2_desc: "Code Generation & Optimization Using IBM Granite (MDL-566), IBM Granite Models for Software Development (MDL-567), and Use Generative AI for Software Development (MDL-504).",
          cert_3_title: "Electrical Engineering Lab Assistant Certificates — UPNVJ (3 Certificates)",
          cert_3_desc: "Digital Systems (645/UN61/SERTF/2026/FT), Basic Physics (626/UN61/SERTF/2026/FT), & Electrical Measurement (SGAS/155.1/UN61/2025/FT).",
          cred_col3_tag: "RESEARCH & LABORATORY MANDATES",
          mandate_2_title: "Intelligent Control System Research Team",
          mandate_2_desc: "Research team (Sep 2026 – Present) developing Dynamic Programming Omni-Wheel AGV navigation, Fuzzy Logic solar streetlights, and autonomous control systems.",
          mandate_3_title: "Electrical Engineering Laboratory Assistant — UPNVJ",
          mandate_3_desc: "Mentoring Electrical Measurement, Basic Physics, and Digital Systems practicums for over 100 undergraduate students (Aug 2025 – Present).",
          mandate_1_desc: "Leading HRD and IoT research incubation at KSM IoT UPNVJ (Jan 2026 – Present) and completed Google Student Ambassador mandate (Apr – Jul 2026).",
          contact_got: "Got ",
          contact_idea: "An Idea?",
          sec_contact_title: "Let's Connect & Collaborate!",
          sec_contact_sub: "Thank you for visiting! I am always looking for new opportunities to apply my skills to innovative projects.",
          contact_discuss: "Let's discuss how we can work together.",
          contact_regards: "Warm regards,",
          email_menu_send: "Send Direct Email",
          email_menu_form: "Write a Quick Message Here",
          form_title: "Send a Quick Message",
          form_name_label: "Your Name / Organization",
          form_topic_label: "Collaboration Topic",
          form_msg_label: "Short Message",
          form_submit_btn: "Open Email Draft & Copy Message",
          footer_note: "Nabhan's Portofolio — IoT, Robotics & Intelligent Control System",
          footer_top: "Back to top ↑",
          modal_highlights_title: "Implementation Details & Outcomes",
          btn_close: "Close",
          btn_print_cv: "Print / Save PDF",
          btn_detail: "View Details →"
        }
      };

      // Updated Featured Projects List (PPK Ormawa & FIR/IIR removed; KARSA Dashboard & Digital Essay split; 3 new projects added!)
      const PROJECTS = [
        {
          id: "smart-hybrid-coffee-dryer",
          categories: ["iot", "ai", "impact"],
          badge: "TOP 1 SDGs FUTURE LEADERS 2026",
          image: IMG_KARSA_DASHBOARD,
          fallback: FALLBACK_DOME,
          imgFit: "object-contain bg-white p-1.5",
          role_id: "Ketua Tim KARSA & Lead IoT System Architect · 2026",
          role_en: "KARSA Team Lead & Lead IoT System Architect · 2026",
          title_id: "Smart Hybrid Drying Dome — Kopi Adaptif Seluma Bersama Astra (KARSA)",
          title_en: "Smart Hybrid Drying Dome — KARSA Adaptive Coffee Project",
          summary_id: "Kubah pengering kopi hibrida cerdas bertenaga surya (off-grid) berbasis IoT dan kendali Logika Fuzzy untuk petani kopi Desa Talang Empat, Bengkulu (359 Ha, >100 ton/tahun).",
          summary_en: "Off-grid solar-powered smart hybrid coffee drying dome using IoT and Fuzzy Logic control for coffee farmers in Talang Empat Village, Bengkulu (359 Ha, >100 tons/year).",
          highlights_id: [
            "Otomatisasi pengaturan suhu (40–50°C) dan kelembapan (40–50% RH) di dalam kubah pengering modular bertenaga PLTS & solar air heater tanpa ketergantungan listrik PLN.",
            "Memangkas waktu penjemuran dari 1–2 bulan menjadi 5–7 hari dengan kadar air stabil sesuai SNI (11%–12%) serta proyeksi peningkatan nilai jual green bean >30%.",
            "Meraih Top 1 Tim SDGs Future Leaders Regional Jakarta–Tangerang 2026 dengan tata kelola Pentahelix dan kaderisasi 5 pemuda desa sebagai teknisi lokal (Local Hero)."
          ],
          highlights_en: [
            "Automated temperature (40–50°C) and humidity (40–50% RH) regulation inside an off-grid solar-powered modular drying dome.",
            "Reduced post-harvest drying time from 1–2 months down to 5–7 days at SNI moisture standards (11%–12%), projecting >30% higher green bean value.",
            "Won Top 1 Team at Astra Honda SDGs Future Leaders Regional Jakarta–Tangerang 2026."
          ],
          tags: ["IoT & Fuzzy Logic", "Off-Grid Solar Dome", "KARSA Dashboard", "SDGs Innovation"]
        },
        {
          id: "smart-farming-sukajaya",
          categories: ["iot", "ai", "impact"],
          badge: "GEMASTIK 2026 · KOTA CERDAS",
          image: IMG_TRANSHEALTH,
          fallback: FALLBACK_SENSOR,
          imgFit: "object-cover object-center",
          role_id: "IoT & Edge AI System Architect · GEMASTIK 2026",
          role_en: "IoT & Edge AI System Architect · GEMASTIK 2026",
          title_id: "TransHealth-AI: Mitigasi Penyakit Airborne pada BRT Transjakarta",
          title_en: "TransHealth-AI: Edge Computer Vision & IoT for BRT Transjakarta",
          summary_id: "Ekosistem mobilitas cerdas berbasis Edge Computer Vision dan IoT untuk pemantauan kualitas udara kabin serta mitigasi risiko penularan penyakit airborne pada Bus Rapid Transit (BRT) Transjakarta (GEMASTIK 2026 Kota Cerdas).",
          summary_en: "Smart mobility ecosystem leveraging Edge Computer Vision and IoT telemetry to mitigate airborne disease transmission inside Transjakarta Bus Rapid Transit (BRT) cabins for GEMASTIK 2026 Smart City.",
          highlights_id: [
            "Mengintegrasikan pemrosesan citra di tepi (Edge Computer Vision) untuk deteksi kepadatan & kepatuhan protokol kesehatan penumpang secara real-time di dalam kabin bus.",
            "Memadukan jaringan sensor kualitas udara IoT (CO2, PM2.5, suhu, kelembapan) dengan aktuasi ventilasi/filtrasi kabin adaptif guna menekan risiko transmisi patogen udara.",
            "Menyajikan peta risiko kesehatan armada secara terpusat untuk mendukung pengambilan keputusan operator transportasi publik Kota Cerdas."
          ],
          highlights_en: [
            "Deployed on-device Edge Computer Vision to monitor cabin occupancy density and airborne risk indicators in real time.",
            "Fused multi-parameter IoT air quality sensing (CO2, PM2.5, temperature, humidity) with adaptive cabin ventilation and filtration control.",
            "Built for the GEMASTIK 2026 Smart City (Kota Cerdas) competition targeting safer public transit mobility on BRT Transjakarta."
          ],
          tags: ["Edge Computer Vision", "IoT Air Quality", "BRT Transjakarta", "GEMASTIK 2026"]
        },
        {
          id: "dsp-fir-iir-matlab",
          categories: ["hardware", "ai", "iot"],
          badge: "INTELLIGENT CONTROL · AGV",
          image: IMG_AGV,
          fallback: FALLBACK_ROBOT,
          imgFit: "object-contain bg-white p-1.5",
          role_id: "Intelligent Control System Research Team · 2026",
          role_en: "Intelligent Control System Research Team · 2026",
          title_id: "Dynamic Programming-Based Navigation of an Omni-Wheel AGV with Barcode Destination Selection",
          title_en: "Dynamic Programming-Based Navigation of an Omni-Wheel AGV with Barcode Destination Selection",
          summary_id: "Perancangan sistem navigasi optimal berbasis algoritma Dynamic Programming pada Automated Guided Vehicle (AGV) berpenggerak Omni-Wheel dengan pemilihan titik tujuan otomatis menggunakan pemindaian Barcode.",
          summary_en: "Optimal path planning and navigation system using Dynamic Programming on an Omni-Wheel Automated Guided Vehicle (AGV) equipped with barcode-based destination selection.",
          highlights_id: [
            "Mengimplementasikan algoritma Dynamic Programming untuk menghitung lintasan terpendek berbiaya minimum pada grid navigasi multi-simpul secara presisi.",
            "Mengendalikan kinematika penggerak empat roda omni-directional (Omni-Wheel) untuk manuver translasi segala arah tanpa perlu radius putar tambahan.",
            "Mengintegrasikan modul pembaca Barcode untuk identifikasi muatan dan pemilihan koordinat stasiun tujuan secara otomatis."
          ],
          highlights_en: [
            "Implemented Dynamic Programming path optimization to compute minimum-cost trajectories across multi-node warehouse grid layouts.",
            "Controlled holonomic 4-wheel Omni-Wheel kinematics enabling seamless lateral and diagonal translation without turning radius constraints.",
            "Integrated optical barcode scanning for automated payload identification and destination node selection."
          ],
          tags: ["Dynamic Programming", "Omni-Wheel AGV", "Barcode Navigation", "Intelligent Control"]
        },
        {
          id: "smart-pju-fuzzy-solar",
          categories: ["iot", "ai", "hardware"],
          badge: "FUZZY LOGIC & SOLAR IOT",
          image: IMG_PJU,
          fallback: FALLBACK_SENSOR,
          imgFit: "object-contain bg-white p-1",
          role_id: "Intelligent Control & IoT Engineer · 2026",
          role_en: "Intelligent Control & IoT Engineer · 2026",
          title_id: "PJU Energi Surya Adaptif Berbasis Logika Fuzzy & Notifikasi Keamanan Warga",
          title_en: "Solar Smart Streetlight (PJU) with Adaptive Fuzzy Logic & Citizen Security Alerts",
          summary_id: "Penerangan Jalan Umum (PJU) berbasis energi surya dengan pengaturan intensitas pencahayaan secara adaptif menggunakan logika fuzzy dan rule-based untuk sistem keamanan melalui pengiriman notifikasi real-time ke warga.",
          summary_en: "Solar-powered smart street lighting (PJU) featuring adaptive luminance control via Fuzzy Logic and rule-based security anomaly detection with instant citizen notifications.",
          highlights_id: [
            "Mengatur peredupan (dimming PWM) lampu jalan LED bertenaga panel surya secara adaptif menggunakan Logika Fuzzy berdasarkan intensitas cahaya lingkungan, kapasitas baterai, dan aktivitas jalan.",
            "Menerapkan sistem keputusan rule-based pada sensor gerak/lingkungan untuk mendeteksi aktivitas mencurigakan atau kondisi darurat pada jam rawan.",
            "Mengirimkan notifikasi peringatan keamanan secara instan ke perangkat warga/pengurus lingkungan melalui konektivitas IoT."
          ],
          highlights_en: [
            "Regulated PWM LED brightness on solar-powered streetlights using Fuzzy Logic based on ambient lux, battery state-of-charge, and pedestrian/vehicle presence.",
            "Combined rule-based security logic to detect anomalous late-night motion or hazard events.",
            "Dispatched real-time security notifications directly to neighborhood residents via IoT messaging."
          ],
          tags: ["Fuzzy Logic", "Rule-Based Security", "Solar PJU", "IoT Notification"]
        },
        {
          id: "sumo-transporter-robotics",
          categories: ["hardware", "iot"],
          badge: "ROBOTIKA · TOP 4 FIK FAIR",
          image: IMG_SUMO,
          fallback: FALLBACK_ROBOT,
          imgFit: "object-cover object-center",
          role_id: "Hardware & Embedded Engineer — KSM IoT UPNVJ · 2025",
          role_en: "Hardware & Embedded Engineer — KSM IoT UPNVJ · 2025",
          title_id: "Robot Sumo Berbasis Mikrokontroler ESP",
          title_en: "ESP Microcontroller-Based Sumo Robot",
          summary_id: "Mengembangkan robot sumo tangguh berbasis mikrokontroler ESP yang dioperasikan secara nirkabel menggunakan remote control serta meraih Top 4 Kompetisi Robot Sumo FIK FAIR UPNVJ.",
          summary_en: "Developed a rugged ESP microcontroller-based sumo robot operated wirelessly via remote control, achieving Top 4 in the FIK FAIR UPNVJ Sumo Robot Competition.",
          highlights_id: [
            "Merancang sasis mekanik 3D berprofil rendah dan tahan benturan menggunakan Autodesk Fusion 360 dan pencetakan 3D Ultimaker Cura.",
            "Mengintegrasikan mikrokontroler ESP, driver motor torsi tinggi, dan sistem kendali nirkabel berlatensi rendah menggunakan C/C++ pada Arduino IDE.",
            "Meraih peringkat Top 4 pada Kompetisi Robot Sumo FIK FAIR yang diselenggarakan oleh BEM FIK UPN \"Veteran\" Jakarta."
          ],
          highlights_en: [
            "Designed a low-profile, impact-resistant 3D chassis in Autodesk Fusion 360 and fabricated parts via Ultimaker Cura.",
            "Integrated an ESP microcontroller, high-torque motor drivers, and low-latency wireless control programmed in C/C++ (Arduino IDE).",
            "Secured Top 4 placement at the FIK FAIR Sumo Robot Competition hosted by BEM FIK UPN \"Veteran\" Jakarta."
          ],
          tags: ["ESP32 / ESP8266", "C / C++", "Fusion 360", "Ultimaker Cura"]
        },
        {
          id: "wireless-transporter-robot",
          categories: ["hardware", "iot"],
          badge: "ROBOTIKA TRANSPORTER",
          image: IMG_TRANSPORTER,
          fallback: FALLBACK_ROBOT,
          imgFit: "object-cover object-center",
          role_id: "Hardware & Robotics Engineer — KSM IoT UPNVJ · 2025",
          role_en: "Hardware & Robotics Engineer — KSM IoT UPNVJ · 2025",
          title_id: "Robot Transporter Kendali Nirkabel",
          title_en: "Wireless Remote-Controlled Transporter Robot",
          summary_id: "Merancang dan merakit robot transporter presisi yang dikendalikan secara nirkabel menggunakan remote control untuk manuver pemindahan objek kompetisi.",
          summary_en: "Designed and assembled a precision wireless remote-controlled transporter robot engineered for rapid object pick-and-place competition maneuvers.",
          highlights_id: [
            "Membangun mekanisme gripper dan penggerak roda presisi yang dimodelkan secara 3D menggunakan Fusion 360.",
            "Merakit sistem distribusi daya, kendali motor DC/servo, serta komunikasi nirkabel yang responsif untuk lintasan kompetisi.",
            "Melakukan pengujian lapangan dan kalibrasi manuver beban secara intensif bersama tim Hardware Engineering KSM IoT UPNVJ."
          ],
          highlights_en: [
            "Engineered a custom 3D-modeled gripper and drivetrain assembly using Fusion 360.",
            "Assembled power distribution, DC/servo motor actuation, and responsive wireless remote control for competition tracks.",
            "Executed extensive load-handling and maneuverability calibration with the KSM IoT UPNVJ Hardware Engineering team."
          ],
          tags: ["Arduino", "Fusion 360", "Wireless RC", "Servo & Motor Control"]
        },
        {
          id: "pcb-design-etching",
          categories: ["hardware"],
          badge: "DESAIN & FABRIKASI PCB",
          image: IMG_PCB,
          fallback: FALLBACK_ROBOT,
          imgFit: "object-cover object-center",
          role_id: "PCB & Hardware Designer · 2025",
          role_en: "PCB & Hardware Designer · 2025",
          title_id: "Desain Sirkuit, Simulasi & Etching PCB",
          title_en: "Circuit Schematic Design, Simulation & Physical PCB Etching",
          summary_id: "Mengerjakan proyek desain sirkuit elektronika mulai dari simulasi skematik hingga proses pembuatan fisik (etching, drilling, dan penyolderan) Printed Circuit Board (PCB).",
          summary_en: "End-to-end electronic circuit engineering from schematic simulation and custom PCB layout to physical copper etching, drilling, and component soldering.",
          highlights_id: [
            "Merancang skematik rangkaian dan menjalankan simulasi fungsional menggunakan Proteus Design Suite.",
            "Membuat tata letak jalur (routing) PCB menggunakan EasyEDA dan KiCad dengan memperhatikan efisiensi ruang dan integritas jalur daya.",
            "Melaksanakan proses fabrikasi mandiri meliputi transfer layout, pelarutan tembaga (etching), pengeboran pad, penyolderan komponen, dan pengujian multitester."
          ],
          highlights_en: [
            "Designed circuit schematics and verified logic/signal behavior using Proteus Design Suite.",
            "Created compact single- and dual-layer PCB layouts in EasyEDA and KiCad optimized for signal integrity.",
            "Performed hands-on board fabrication including toner transfer, chemical copper etching, pad drilling, soldering, and multimeter continuity testing."
          ],
          tags: ["EasyEDA", "Proteus", "KiCad", "PCB Etching"]
        },
        {
          id: "digital-essay-iff",
          categories: ["impact"],
          badge: "FINALIS ESAI & INOVASI DIGITAL",
          image: IMG_ESSAY,
          fallback: FALLBACK_DOME,
          imgFit: "object-contain bg-white p-1",
          role_id: "Penulis Utama & Peneliti Inovasi Digital · 2026",
          role_en: "Lead Author & Digital Innovation Researcher · 2026",
          title_id: "Esai Inovasi Digital: Eco-Anxiety ke Eco-Preneur Menuju Indonesia Emas 2045",
          title_en: "Digital Innovation Essay: From Eco-Anxiety to Eco-Preneur Toward Golden Indonesia 2045",
          summary_id: "Penulisan karya esai ilmiah kompetitif mengenai peran generasi muda dan pemanfaatan inovasi teknologi hijau dalam menjawab tantangan krisis iklim menuju Indonesia Emas 2045.",
          summary_en: "Competitive scientific essay exploring youth-driven green technology entrepreneurship and digital innovation to address climate challenges toward Golden Indonesia 2045.",
          highlights_id: [
            "Terpilih sebagai Finalis Kompetisi Esai Ilmiah Nasional IFF 2026 melalui gagasan strategis transformasi kecemasan ekologis (eco-anxiety) menjadi wirausaha hijau berbasis teknologi (eco-preneur).",
            "Merumuskan kerangka kolaborasi pemuda, literasi digital, dan adopsi IoT ramah lingkungan untuk mendukung target pembangunan berkelanjutan."
          ],
          highlights_en: [
            "Selected as a National Finalist at the IFF 2026 Essay Competition for proposing a strategic framework turning youth eco-anxiety into tech-enabled green entrepreneurship.",
            "Synthesized digital literacy, appropriate IoT technology, and sustainable business models."
          ],
          tags: ["Scientific Essay", "IFF 2026 Finalist", "Green Economy", "Youth Innovation"]
        },
        {
          id: "smart-room-blynk-egots",
          categories: ["iot", "hardware", "ai"],
          badge: "PROTOTIPE IOT & FUZZY LOGIC",
          image: IMG_DOME_PROTO,
          fallback: FALLBACK_DOME,
          imgFit: "object-contain bg-white p-1.5",
          role_id: "IoT & Hardware Prototyper · 2026",
          role_en: "IoT & Hardware Prototyper · 2026",
          title_id: "Prototype Smart Hybrid Drying Dome pada Penjemuran Biji Kopi dengan Sistem Monitoring Berbasis IoT dan Fuzzy",
          title_en: "Smart Hybrid Drying Dome Prototype for Coffee Bean Drying with IoT Monitoring & Fuzzy Control",
          summary_id: "Rancang bangun prototipe fisik kubah pengering biji kopi berukuran 50 × 50 × 50 cm dengan sensor DHT22, BH1750, PTC-37, PTC Heater, dan Exhaust Fan berbasis IoT dan kendali Logika Fuzzy.",
          summary_en: "50 × 50 × 50 cm physical prototype of a smart hybrid coffee bean drying dome integrating DHT22, BH1750, PTC-37 sensors, PTC Heater, and Exhaust Fan with IoT monitoring and Fuzzy Logic control.",
          highlights_id: [
            "Merancang struktur prototipe kubah pengering berdimensi 50 × 50 × 50 cm dengan 2 rak pengering berjarak 15 cm, Box Panel elektronika, dan Power Supply terintegrasi.",
            "Mengintegrasikan sensor suhu & kelembapan (DHT22), intensitas cahaya (BH1750), dan sensor hujan/kondisi (PTC-37) untuk pemantauan mikroklimat secara real-time melalui IoT.",
            "Mengendalikan aktuator pemanas (PTC Heater) dan kipas sirkulasi (Exhaust Fan) secara otomatis menggunakan algoritma Logika Fuzzy agar laju pengeringan biji kopi tetap stabil."
          ],
          highlights_en: [
            "Engineered a 50 × 50 × 50 cm physical drying dome prototype with dual drying racks (15 cm spacing), integrated control panel box, and dedicated power supply.",
            "Integrated DHT22 temperature/humidity, BH1750 light intensity, and PTC-37 environmental sensors for real-time IoT telemetry.",
            "Automated PTC Heater and Exhaust Fan actuation via Fuzzy Logic control to maintain optimal coffee bean drying conditions."
          ],
          tags: ["DHT22 & BH1750", "PTC Heater & Exhaust", "Fuzzy Logic & IoT", "3D CAD Prototype"]
        }
      ];

      // Updated Experience List (Scout Coach removed; Intelligent Control System Research Team Sep 2026 - Present added; GSA ended Jul 2026)
      const EXPERIENCES = [
        {
          id: "exp-ics-research",
          category: "tech",
          period_id: "Sep 2026 – Sekarang",
          period_en: "Sep 2026 – Present",
          org: "Teknik Elektro UPN \"Veteran\" Jakarta",
          role_id: "Intelligent Control System Research Team",
          role_en: "Intelligent Control System Research Team",
          badge: "INTELLIGENT CONTROL RESEARCH",
          points_id: [
            "Melaksanakan riset dan pengembangan sistem kendali cerdas meliputi navigasi Omni-Wheel AGV berbasis Dynamic Programming serta sistem PJU surya adaptif berbasis Logika Fuzzy dan rule-based.",
            "Merancang integrasi algoritma kendali optimal, sensor-aktuator, dan pengujian perangkat keras skala laboratorium maupun prototipe lapangan."
          ],
          points_en: [
            "Conducting research and development on intelligent control systems including Dynamic Programming-based Omni-Wheel AGV navigation and Fuzzy Logic adaptive solar street lighting.",
            "Designing optimal control algorithms, sensor-actuator integration, and hardware-in-the-loop validation."
          ]
        },
        {
          id: "exp-ksm-hrd",
          category: "leadership",
          period_id: "Jan 2026 – Sekarang",
          period_en: "Jan 2026 – Present",
          org: "KSM Internet of Things (IoT) UPNVJ",
          role_id: "Head of Department HRD (Human Resource Development)",
          role_en: "Head of Department HRD (Human Resource Development)",
          badge: "KSM IOT UPNVJ",
          points_id: [
            "Memimpin strategi inovasi IoT organisasi berbasis riset dan data serta mengelola pengembangan kapasitas sumber daya anggota.",
            "Memfasilitasi peningkatan keterampilan teknis anggota melalui lokakarya metodologi riset, memimpin tinjauan proyek berkala, dan mengelola silabus Design Thinking."
          ],
          points_en: [
            "Directed research- and data-driven IoT innovation strategies while managing member recruitment and competency development.",
            "Facilitated technical capacity building via research methodology workshops, periodic project reviews, and Design Thinking incubation curricula."
          ]
        },
        {
          id: "exp-aslab",
          category: "tech",
          period_id: "Agu 2025 – Sekarang",
          period_en: "Aug 2025 – Present",
          org: "Laboratorium Teknik Elektro UPN \"Veteran\" Jakarta",
          role_id: "Asisten Laboratorium",
          role_en: "Laboratory Teaching Assistant",
          badge: "LABORATORIUM ELEKTRO",
          points_id: [
            "Membimbing praktikum Pengukuran Besaran Listrik, Fisika Dasar, dan Sistem Digital serta melatih komunikasi teknis kepada lebih dari 100 mahasiswa secara langsung.",
            "Menjaga ketelitian dalam menangani inventaris alat ukur serta membantu troubleshooting rangkaian dan komponen hardware praktikan."
          ],
          points_en: [
            "Guided hands-on Electrical Measurement, Basic Physics, and Digital Systems practicums for more than 100 undergraduate students.",
            "Maintained laboratory instrument inventory accuracy and assisted students with real-time circuit and hardware troubleshooting."
          ]
        },
        {
          id: "exp-gsa",
          category: "leadership",
          period_id: "Apr 2026 – Jul 2026",
          period_en: "Apr 2026 – Jul 2026",
          org: "Google Indonesia",
          role_id: "Google Student Ambassador 2026",
          role_en: "Google Student Ambassador 2026",
          badge: "GOOGLE INDONESIA",
          points_id: [
            "Menginisiasi program literasi teknologi dan memimpin kampanye pengenalan produk Google & AI di lingkungan kampus UPN \"Veteran\" Jakarta.",
            "Memfasilitasi diskusi dan berkolaborasi dengan mahasiswa dari berbagai latar belakang untuk mengembangkan ekosistem teknologi yang inklusif."
          ],
          points_en: [
            "Initiated campus technology literacy programs and led Google & AI product campaigns at UPN \"Veteran\" Jakarta.",
            "Facilitated cross-disciplinary discussions and student collaborations to foster an inclusive campus tech ecosystem."
          ]
        },
        {
          id: "exp-ksm-hw",
          category: "tech",
          period_id: "Jan 2025 – Des 2025",
          period_en: "Jan 2025 – Dec 2025",
          org: "KSM Internet of Things (IoT) UPNVJ",
          role_id: "Staff Hardware Engineering",
          role_en: "Staff Hardware Engineering",
          badge: "HARDWARE & ROBOTICS",
          points_id: [
            "Mengembangkan proyek riset dan kompetisi berbasis perangkat keras meliputi Smart Room, Robot Sumo berbasis ESP, dan Robot Transporter nirkabel.",
            "Terlibat langsung dalam perancangan 3D (Fusion 360), desain & etching PCB (EasyEDA/Proteus), serta pemrograman mikrokontroler C++ dan Python."
          ],
          points_en: [
            "Developed hardware research and competition projects including Smart Room systems, ESP-based Sumo Robots, and wireless Transporter Robots.",
            "Executed 3D CAD modeling (Fusion 360), PCB layout & etching (EasyEDA/Proteus), and C++/Python firmware programming."
          ]
        },
        {
          id: "exp-belfest",
          category: "leadership",
          period_id: "Apr 2025 – Des 2025",
          period_en: "Apr 2025 – Dec 2025",
          org: "Bela Negara Festival Vol. 7",
          role_id: "General Support Crew & Internal Liaison Officer (Best of Staff)",
          role_en: "General Support Crew & Internal Liaison Officer (Best of Staff)",
          badge: "FESTIVAL OPS · ±9.000 AUDIENS",
          points_id: [
            "Bertanggung jawab penuh atas penyusunan SOP, kenyamanan, ketertiban, dan kelancaran alur bagi ±9.000 pengunjung festival.",
            "Memimpin dan mengoordinasikan 35 volunteer serta bertindak sebagai Liaison Officer komunikasi utama antar divisi di lapangan."
          ],
          points_en: [
            "Managed operational SOPs, crowd comfort, safety, and venue flow across ±9,000 festival visitors.",
            "Coordinated 35 field volunteers and served as primary cross-division Liaison Officer, earning the Best of Staff Division award."
          ]
        }];

      // Updated Slide 5 Data: Each MC, Moderator, Speaker, and Volunteer event separated into its own distinct card!
      // (Scout Coach and Humas KTI / Bendahara Karang Taruna completely removed as requested)
      const SPEAKING_VOLUNTEERS = [
        {
          id: "exp-scout",
          badge: "MODERATOR FORUM TEKNIS",
          period_id: "Mei 2025",
          period_en: "May 2025",
          title_id: "Moderator — VOLT-UP Electropath Talk 2025",
          title_en: "Moderator — VOLT-UP Electropath Talk 2025",
          org: "Himpunan Mahasiswa Teknik Elektro UPNVJ",
          image: IMG_SPK_MODERATOR,
          fallback: FALLBACK_DOME,
          desc_id: "Memimpin jalannya diskusi panel dan sesi tanya jawab interaktif antara praktisi profesional industri teknik elektro dan mahasiswa.",
          desc_en: "Moderated technical panel discussions and interactive Q&A sessions connecting electrical engineering industry practitioners with students.",
          tags: ["Moderator", "Technical Talkshow", "Public Speaking"]
        },
        {
          id: "exp-events",
          badge: "MASTER OF CEREMONIES (MC)",
          period_id: "Mar 2025",
          period_en: "Mar 2025",
          title_id: "Master of Ceremonies (MC) & Korlap — BATAREL 2025",
          title_en: "Master of Ceremonies (MC) & Field Lead — BATAREL 2025",
          org: "Batal Bareng Elektro (BATAREL) 2025 — 150 Peserta",
          image: IMG_SPK_BATAREL,
          fallback: FALLBACK_DOME,
          desc_id: "Memandu jalannya acara secara interaktif sekaligus mengoordinasikan persiapan venue dan tata letak lokasi bagi 150 peserta Teknik Elektro.",
          desc_en: "Hosted the main stage program with engaging audience interaction while coordinating venue layout and logistics for 150 attendees.",
          tags: ["Master of Ceremonies", "Field Coordinator", "150 Attendees"]
        },
        {
          badge: "MASTER OF CEREMONIES (MC)",
          period_id: "Mar 2025",
          period_en: "Mar 2025",
          title_id: "Master of Ceremonies (MC) — Sensor Volume 1 (Talkshow KRSTI)",
          title_en: "Master of Ceremonies (MC) — Sensor Vol. 1 (KRSTI Talkshow)",
          org: "Talkshow KRSTI Fakultas Teknik UPNVJ",
          image: IMG_SPK_SENSOR,
          fallback: FALLBACK_DOME,
          desc_id: "Membawakan acara talkshow teknologi dan robotika, menjaga transisi agenda tetap dinamis, serta meningkatkan kepuasan audiens berdasarkan survei pasca-acara.",
          desc_en: "Hosted the robotics and technology talkshow, maintaining dynamic stage transitions and achieving high post-event audience satisfaction.",
          tags: ["Master of Ceremonies", "Robotics Talkshow", "Stage Hosting"]
        },
        {
          badge: "MASTER OF CEREMONIES (MC)",
          period_id: "Nov 2025",
          period_en: "Nov 2025",
          title_id: "Master of Ceremonies (MC) — Grandlaunching & Offboarding",
          title_en: "Master of Ceremonies (MC) — Grandlaunching & Offboarding",
          org: "Organisasi Kemahasiswaan UPN \"Veteran\" Jakarta",
          image: IMG_SPK_GRAND,
          fallback: FALLBACK_DOME,
          desc_id: "Memandu seremoni peresmian program kerja (Grandlaunching) dan penutupan masa bakti kepengurusan (Offboarding) organisasi secara formal dan khidmat.",
          desc_en: "Hosted formal organizational Grandlaunching and executive Offboarding ceremonies.",
          tags: ["Master of Ceremonies", "Formal Ceremony", "Organizational Event"]
        },
        {
          badge: "PEMBICARA & EDUKATOR IOT",
          period_id: "Mei 2025",
          period_en: "May 2025",
          title_id: "Pembicara IoT — Electro Goes to School (EGOTS) 2025",
          title_en: "IoT Speaker — Electro Goes to School (EGOTS) 2025",
          org: "SMAN 6 Tangerang Selatan · Delegasi KSM IoT UPNVJ",
          image: IMG_SPK_EGOTS,
          fallback: FALLBACK_SENSOR,
          desc_id: "Memperkenalkan konsep Internet of Things (IoT) dan mendemonstrasikan prototipe Smart Room berbasis website Blynk secara langsung kepada siswa SMAN 6 Tangerang Selatan.",
          desc_en: "Introduced Internet of Things (IoT) concepts and conducted live Blynk Smart Room hardware demonstrations for high school students at SMAN 6 South Tangerang.",
          tags: ["IoT Speaker", "Live Hardware Demo", "EGOTS 2025"]
        },
        {
          badge: "PEMBICARA PKKMB FAKULTAS",
          period_id: "Agu 2025",
          period_en: "Aug 2025",
          title_id: "Pemateri Pengenalan IoT — PKKMB Fakultas Teknik UPNVJ",
          title_en: "IoT Speaker — Faculty of Engineering PKKMB Orientation",
          org: "Fakultas Teknik UPN \"Veteran\" Jakarta",
          image: IMG_SPK_PKKMB,
          fallback: FALLBACK_SENSOR,
          desc_id: "Menyampaikan materi pengenalan ekosistem riset Internet of Things, robotika, dan inovasi perangkat keras kepada mahasiswa baru Fakultas Teknik.",
          desc_en: "Delivered introductory presentations on IoT research, robotics, and hardware innovation to incoming Faculty of Engineering freshmen.",
          tags: ["PKKMB Speaker", "Tech Orientation", "KSM IoT Delegate"]
        },
        {
          badge: "BEST OF STAFF · ±9.000 VISITORS",
          period_id: "Apr – Des 2025",
          period_en: "Apr – Dec 2025",
          title_id: "General Support Crew — Bela Negara Festival Vol. 7",
          title_en: "General Support Crew — Bela Negara Festival Vol. 7",
          org: "Bela Negara Festival (BELFEST) Vol. 7 UPNVJ",
          image: IMG_SPK_BELFEST,
          fallback: FALLBACK_DOME,
          desc_id: "Merancang SOP pengendalian keramaian untuk ±9.000 pengunjung, memimpin koordinasi 35 volunteer lapangan, serta meraih penghargaan Best of Staff Division.",
          desc_en: "Authored crowd-control SOPs for ±9,000 festival visitors, led 35 field volunteers, and received the Best of Staff Division award.",
          tags: ["Crowd Management", "35 Volunteers Lead", "Best of Staff"]
        },
        {
          badge: "VOLUNTEER NASIONAL",
          period_id: "Jul 2025",
          period_en: "Jul 2025",
          title_id: "Volunteer Operasional Opening Ceremony — Piala Presiden 2025",
          title_en: "Opening Ceremony Operations Volunteer — 2025 Presidential Cup",
          org: "Turnamen Nasional Piala Presiden 2025",
          image: IMG_SPK_PRESIDEN,
          fallback: FALLBACK_ROBOT,
          desc_id: "Mendukung kelancaran operasional lapangan, ketertiban alur penonton, serta eksekusi teknis pada seremoni pembukaan Piala Presiden 2025.",
          desc_en: "Supported on-ground venue operations, spectator flow coordination, and ceremonial execution during the national 2025 Presidential Cup Opening Ceremony.",
          tags: ["National Event Ops", "Crowd Flow", "Volunteer"]
        }
      ];

      let currentLang = "id";
      let currentCategory = "all";
      let currentExpFilter = "all";
      let isGridView = false;
      let autoPlayTimer = null;
      let isAutoPlaying = true;
      let currentCvLang = "id";
      let photoMode = 0; // 0: Studio Marsel style of HRD HEAD.jpg, 1: Cropped original HRD HEAD.jpg
      let typedIdx = 0;

      const $ = (sel) => document.querySelector(sel);
      const $$ = (sel) => Array.from(document.querySelectorAll(sel));

      function getSavedPref(key, fallback) {
        try {
          const val = window.localStorage.getItem(key);
          return val !== null ? val : fallback;
        } catch (e) {
          return fallback;
        }
      }

      function setSavedPref(key, val) {
        try {
          window.localStorage.setItem(key, val);
        } catch (e) {
          // ignore storage restrictions
        }
      }

      let toastTimeout = null;
      function showToast(message) {
        const banner = $("#toast-banner");
        const text = $("#toast-text");
        if (!banner || !text) return;
        text.textContent = message;
        banner.classList.remove("hidden");
        banner.classList.add("flex");
        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          banner.classList.add("hidden");
          banner.classList.remove("flex");
        }, 3200);
      }

      function copyTextToClipboard(text, successMsg) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg);
          }).catch(() => {
            fallbackCopy(text, successMsg);
          });
        } else {
          fallbackCopy(text, successMsg);
        }
      }

      function fallbackCopy(text, successMsg) {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          showToast(successMsg);
        } catch (e) {
          showToast(text);
        }
        document.body.removeChild(ta);
      }

      // Render 10 Technical App Icons in Slide 2 (Leadership & Wokwi removed)
      function renderSkillsJson() {
        const grid = $("#skills-json-grid");
        if (!grid) return;
        grid.innerHTML = SKILLS_JSON.map((sk) => `
          <div class="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border flex items-center justify-center p-2 transition-all hover:-translate-y-1 hover:shadow-md" style="background: var(--canvas); border-color: var(--line);" title="${sk.name}">
            <img src="${sk.icon}" alt="${sk.name}" class="w-full h-full object-contain" />
          </div>
        `).join("");

        $$("#skills-json-grid img").forEach((img) => {
          img.addEventListener("error", function () {
            this.src = AVATAR_SVG_URI;
          });
        });
      }

      // Render Projects (Slide 3)

      const CERTIFICATES = [
        {
          id: "cert-sfl-2026",
          badge: "TOP 1 REGIONAL AWARD",
          credId: "Astra Honda SFL 2026",
          date_id: "Okt 2026",
          date_en: "Oct 2026",
          image: IMG_CERT_SFL2026,
          fallback: IMG_CERT_SFL2026,
          driveUrl: "https://drive.google.com/file/d/1lGVaooPEibSi5mTQ4G0vnWQgfc02jzed/view?usp=drivesdk",
          issuer: "Wahana Artha Group × Astra Honda Motor",
          title_id: "Tim Terbaik 1 — Program Astra Honda SDGs Future Leaders 2026 (Tingkat Regional)",
          title_en: "1st Best Team — Astra Honda SDGs Future Leaders 2026 (Regional Level)",
          desc_id: "Diberikan kepada Muhamad Nabhan Azmi (Karsa Tim — UPN \"Veteran\" Jakarta) sebagai Tim Terbaik 1 Tingkat Regional dalam Program Astra Honda SDGs Future Leaders 2026.",
          desc_en: "Awarded to Muhamad Nabhan Azmi (Karsa Team — UPN \"Veteran\" Jakarta) as 1st Best Team at the Regional Level in the Astra Honda SDGs Future Leaders 2026 Program.",
          highlights_id: [
            "Penerima: Muhamad Nabhan Azmi — Karsa Tim, Universitas Pembangunan Nasional \"Veteran\" Jakarta.",
            "Ditandatangani oleh Michael C. Soekamto (Chief of Corporate Affairs Wahana Artha)."
          ],
          highlights_en: [
            "Recipient: Muhamad Nabhan Azmi — Karsa Team, Universitas Pembangunan Nasional \"Veteran\" Jakarta.",
            "Signed by Michael C. Soekamto (Chief of Corporate Affairs, Wahana Artha)."
          ],
          tags: ["Top 1 Regional", "SDGs Future Leaders", "Astra Honda"]
        },
        {
          id: "cert-gsa-2026",
          badge: "GOOGLE STUDENT AMBASSADOR",
          credId: "GSA26/B1/GRAD/XXVI-01/GSAID261143",
          date_id: "Agu 2026",
          date_en: "Aug 2026",
          image: IMG_CERT_GSA2026,
          fallback: IMG_CERT_GSA2026,
          driveUrl: "https://drive.google.com/file/d/1cSzP8RL1EJzAH7InFAtbx3UN_GCCZVMV/view?usp=drivesdk",
          issuer: "Google Gemini Southeast Asia",
          title_id: "Google Student Ambassador — Class of 2026 (Certificate of Participation)",
          title_en: "Google Student Ambassador — Class of 2026 (Certificate of Participation)",
          desc_id: "Diberikan kepada Muhamad Nabhan atas dedikasi dan kepemimpinan sebagai Google Student Ambassador 2026 (terpilih dari 81.000 pendaftar mahasiswa se-Indonesia).",
          desc_en: "Awarded to Muhamad Nabhan in recognition of contributions as a Google Student Ambassador, selected from 81,000 students nationwide to champion Google AI adoption.",
          highlights_id: [
            "Nomor Sertifikat: GSA26/B1/GRAD/XXVI-01/GSAID261143.",
            "Ditandatangani oleh Nichapa Dhamabutra (Product Marketing Manager, Gemini Southeast Asia)."
          ],
          highlights_en: [
            "Credential ID: GSA26/B1/GRAD/XXVI-01/GSAID261143.",
            "Signed by Nichapa Dhamabutra (Product Marketing Manager, Gemini Southeast Asia)."
          ],
          tags: ["Google AI", "GSAID261143", "Top 81,000 Pool"]
        },
        {
          id: "cert-google-ai-hacktiv8",
          badge: "GOOGLE.ORG × HACKTIV8",
          credId: "01813/H8/CSR/MBA2/IV/2026",
          date_id: "28 Apr 2026",
          date_en: "28 Apr 2026",
          image: IMG_CERT_GOOGLE_AI,
          fallback: IMG_CERT_GOOGLE_AI,
          driveUrl: "https://drive.google.com/file/d/10gtwGgTvP58omZohFfacysrpSnFBiqpA/view?usp=drivesdk",
          issuer: "Hacktiv8 Indonesia × AVPN & Google.org (Maju Bareng AI)",
          title_id: "AI for Work & Career Readiness with Google AI Products",
          title_en: "AI for Work & Career Readiness with Google AI Products",
          desc_id: "Certificate of Accomplishment atas penyelesaian program Maju Bareng AI (10 jam pelatihan intensif & pengembangan proyek akhir, 6–15 April 2026).",
          desc_en: "Certificate of Accomplishment for completing the Maju Bareng AI program (10 learning hours & final project development, 6–15 April 2026).",
          highlights_id: [
            "Penerima: Muhamad Nabhan Azmi · Certificate ID: 01813/H8/CSR/MBA2/IV/2026.",
            "Ditandatangani oleh Riza Fahmi (Co-Founder & Chief Evangelist of Hacktiv8)."
          ],
          highlights_en: [
            "Recipient: Muhamad Nabhan Azmi · Certificate ID: 01813/H8/CSR/MBA2/IV/2026.",
            "Signed by Riza Fahmi (Co-Founder & Chief Evangelist of Hacktiv8)."
          ],
          tags: ["Google AI Products", "Hacktiv8", "10 Jam Pelatihan"]
        },
        {
          id: "cert-aslab-sisdig",
          badge: "ASISTEN PRAKTIKUM FT UPNVJ",
          credId: "645/UN61/SERTF/2026/FT",
          date_id: "Semester Genap 2025/2026",
          date_en: "Even Semester 2025/2026",
          image: IMG_CERT_ASLAB_SISDIG,
          fallback: IMG_CERT_ASLAB_SISDIG,
          driveUrl: "https://drive.google.com/file/d/1HbREyJqUZpCr7aMAuomD2WPPpay9N_Qr/view?usp=drivesdk",
          issuer: "Fakultas Teknik UPN \"Veteran\" Jakarta",
          title_id: "Sertifikat Asisten Praktikum Sistem Digital — Semester Genap T.A. 2025/2026",
          title_en: "Digital Systems Laboratory Assistant Certificate — Even Semester A.Y. 2025/2026",
          desc_id: "Diberikan kepada Muhamad Nabhan Azmi (NIM. 2410314014) atas kontribusinya sebagai Asisten Praktikum Sistem Digital di Fakultas Teknik UPN \"Veteran\" Jakarta.",
          desc_en: "Awarded to Muhamad Nabhan Azmi (NIM. 2410314014) for serving as Digital Systems Laboratory Assistant at the Faculty of Engineering, UPN \"Veteran\" Jakarta.",
          highlights_id: [
            "Nomor Sertifikat: 645/UN61/SERTF/2026/FT.",
            "Disahkan oleh Dekan Fakultas Teknik (Dr. Eng. Ir. Teguh Firmansyah, S.T., M.T., IPM) & Dosen Pembimbing Praktikum (Ir. Fajar Rahayu, S.T., M.T.)."
          ],
          highlights_en: [
            "Certificate Number: 645/UN61/SERTF/2026/FT.",
            "Signed by the Dean of Faculty of Engineering (Dr. Eng. Ir. Teguh Firmansyah, S.T., M.T., IPM) & Lab Supervisor (Ir. Fajar Rahayu, S.T., M.T.)."
          ],
          tags: ["Sistem Digital", "Asisten Lab", "FT UPNVJ"]
        },
        {
          id: "cert-aslab-fisika",
          badge: "ASISTEN PRAKTIKUM FT UPNVJ",
          credId: "626/UN61/SERTF/2026/FT",
          date_id: "Semester Genap 2025/2026",
          date_en: "Even Semester 2025/2026",
          image: IMG_CERT_ASLAB_FISIKA,
          fallback: IMG_CERT_ASLAB_FISIKA,
          driveUrl: "https://drive.google.com/file/d/1bXR51UkPKRZc0IWnGnwMScEUTrf1Yp_3/view?usp=drivesdk",
          issuer: "Fakultas Teknik UPN \"Veteran\" Jakarta",
          title_id: "Sertifikat Asisten Praktikum Fisika — Semester Genap T.A. 2025/2026",
          title_en: "Physics Laboratory Assistant Certificate — Even Semester A.Y. 2025/2026",
          desc_id: "Diberikan kepada Muhamad Nabhan Azmi (NIM. 2410314014) atas kontribusinya sebagai Asisten Praktikum Fisika di Fakultas Teknik UPN \"Veteran\" Jakarta.",
          desc_en: "Awarded to Muhamad Nabhan Azmi (NIM. 2410314014) for serving as Physics Laboratory Assistant at the Faculty of Engineering, UPN \"Veteran\" Jakarta.",
          highlights_id: [
            "Nomor Sertifikat: 626/UN61/SERTF/2026/FT.",
            "Disahkan oleh Dekan Fakultas Teknik (Dr. Eng. Ir. Teguh Firmansyah, S.T., M.T., IPM) & Dosen Pembimbing Praktikum (Ir. Fajar Rahayu, S.T., M.T.)."
          ],
          highlights_en: [
            "Certificate Number: 626/UN61/SERTF/2026/FT.",
            "Signed by the Dean of Faculty of Engineering (Dr. Eng. Ir. Teguh Firmansyah, S.T., M.T., IPM) & Lab Supervisor (Ir. Fajar Rahayu, S.T., M.T.)."
          ],
          tags: ["Praktikum Fisika", "Asisten Lab", "FT UPNVJ"]
        },
        {
          id: "cert-aslab-pbl",
          badge: "ASISTEN PRAKTIKUM FT UPNVJ",
          credId: "SGAS/155.1/UN61/2025/FT",
          date_id: "Semester Ganjil 2025/2026",
          date_en: "Odd Semester 2025/2026",
          image: IMG_CERT_ASLAB_PBL,
          fallback: IMG_CERT_ASLAB_PBL,
          driveUrl: "https://drive.google.com/file/d/1wSTFeHR2oJciep_VuxZcsbCNW3SGcpmq/view?usp=drivesdk",
          issuer: "Lab. Elektronika dan Kendali FT UPN \"Veteran\" Jakarta",
          title_id: "Sertifikat Asisten Praktikum Pengukuran Besaran Listrik — Semester Ganjil T.A. 2025/2026",
          title_en: "Electrical Measurement Lab Assistant Certificate — Odd Semester A.Y. 2025/2026",
          desc_id: "Diberikan kepada Muhamad Nabhan Azmi atas kontribusinya sebagai Asisten Praktikum Pengukuran Besaran Listrik Semester Ganjil T.A. 2025/2026.",
          desc_en: "Awarded to Muhamad Nabhan Azmi for contributions as Electrical Measurement Laboratory Assistant in Odd Semester A.Y. 2025/2026.",
          highlights_id: [
            "Nomor Sertifikat: SGAS/155.1/UN61/2025/FT.",
            "Disahkan oleh Dekan Fakultas Teknik (Dr. Eng. Ir. Teguh Firmansyah, S.T., M.T., IPM) & Kepala Lab. Elektronika dan Kendali (Ir. Fajar Rahayu, S.T., M.T.)."
          ],
          highlights_en: [
            "Certificate Number: SGAS/155.1/UN61/2025/FT.",
            "Signed by the Dean of Faculty of Engineering & Head of Electronics and Control Lab (Ir. Fajar Rahayu, S.T., M.T.)."
          ],
          tags: ["Pengukuran Besaran Listrik", "Lab Elektronika & Kendali", "FT UPNVJ"]
        },
        {
          id: "cert-ibm-granite-opt",
          badge: "IBM SKILLSBUILD",
          credId: "MDL-566",
          date_id: "22 Okt 2025",
          date_en: "22 Oct 2025",
          image: IMG_CERT_IBM_OPT,
          fallback: IMG_CERT_IBM_OPT,
          driveUrl: "https://drive.google.com/file/d/1W-ys3souc37BG-iFqdThxI8qDi1q2n_w/view?usp=drivesdk",
          issuer: "IBM SkillsBuild (Moodle System of Record)",
          title_id: "Code Generation and Optimization Using IBM Granite (MDL-566)",
          title_en: "Code Generation and Optimization Using IBM Granite (MDL-566)",
          desc_id: "Completion Certificate atas nama Muhamad Nabhan untuk penyelesaian modul Code Generation and Optimization Using IBM Granite (3 jam 30 menit).",
          desc_en: "Completion Certificate presented to Muhamad Nabhan for completing Code Generation and Optimization Using IBM Granite (3 hrs 30 mins).",
          highlights_id: [
            "Kode Modul: MDL-566 · Tanggal Penyelesaian: 22 Oktober 2025 (GMT).",
            "Durasi Pembelajaran Terverifikasi: 3 jam 30 menit."
          ],
          highlights_en: [
            "Course Code: MDL-566 · Completion Date: 22 October 2025 (GMT).",
            "Verified Learning Hours: 3 hrs 30 mins."
          ],
          tags: ["IBM Granite", "MDL-566", "Code Optimization"]
        },
        {
          id: "cert-ibm-granite-models",
          badge: "IBM SKILLSBUILD",
          credId: "MDL-567",
          date_id: "22 Okt 2025",
          date_en: "22 Oct 2025",
          image: IMG_CERT_IBM_MODELS,
          fallback: IMG_CERT_IBM_MODELS,
          driveUrl: "https://drive.google.com/file/d/1_v9V2cjseKRYjrdknVG_uuEqOv8PRKVP/view?usp=drivesdk",
          issuer: "IBM SkillsBuild (Moodle System of Record)",
          title_id: "IBM Granite Models for Software Development (MDL-567)",
          title_en: "IBM Granite Models for Software Development (MDL-567)",
          desc_id: "Completion Certificate atas nama Muhamad Nabhan untuk penyelesaian modul IBM Granite Models for Software Development (1 jam 30 menit).",
          desc_en: "Completion Certificate presented to Muhamad Nabhan for completing IBM Granite Models for Software Development (1 hr 30 mins).",
          highlights_id: [
            "Kode Modul: MDL-567 · Tanggal Penyelesaian: 22 Oktober 2025 (GMT).",
            "Durasi Pembelajaran Terverifikasi: 1 jam 30 menit."
          ],
          highlights_en: [
            "Course Code: MDL-567 · Completion Date: 22 October 2025 (GMT).",
            "Verified Learning Hours: 1 hr 30 mins."
          ],
          tags: ["IBM Granite", "MDL-567", "Software Development"]
        },
        {
          id: "cert-ibm-genai-dev",
          badge: "IBM SKILLSBUILD",
          credId: "MDL-504",
          date_id: "22 Okt 2025",
          date_en: "22 Oct 2025",
          image: IMG_CERT_IBM_GENAI,
          fallback: IMG_CERT_IBM_GENAI,
          driveUrl: "https://drive.google.com/file/d/1n3WXoFmzU07gPzzMSlpc2G9MpVy3arbY/view?usp=drivesdk",
          issuer: "IBM SkillsBuild (Moodle System of Record)",
          title_id: "Use Generative AI for Software Development (MDL-504)",
          title_en: "Use Generative AI for Software Development (MDL-504)",
          desc_id: "Completion Certificate atas nama Muhamad Nabhan untuk penyelesaian modul Use Generative AI for Software Development (1 jam pembelajaran).",
          desc_en: "Completion Certificate presented to Muhamad Nabhan for completing Use Generative AI for Software Development (1 learning hour).",
          highlights_id: [
            "Kode Modul: MDL-504 · Tanggal Penyelesaian: 22 Oktober 2025 (GMT).",
            "Durasi Pembelajaran Terverifikasi: 1 jam."
          ],
          highlights_en: [
            "Course Code: MDL-504 · Completion Date: 22 October 2025 (GMT).",
            "Verified Learning Hours: 1 hr."
          ],
          tags: ["Generative AI", "MDL-504", "IBM SkillsBuild"]
        }
      ];

      function renderProjects() {
        const container = $("#projects-container");
        if (!container) return;

        const filtered = PROJECTS.filter((p) =>
          currentCategory === "all" || p.categories.includes(currentCategory)
        );

        container.className = isGridView
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "carousel-track";

        container.innerHTML = filtered.map((proj, idx) => {
          const title = currentLang === "id" ? proj.title_id : proj.title_en;
          const summary = currentLang === "id" ? proj.summary_id : proj.summary_en;
          const role = currentLang === "id" ? proj.role_id : proj.role_en;
          const detailLabel = I18N[currentLang].btn_detail;
          const itemClass = isGridView
            ? "apple-card flex flex-col justify-between overflow-hidden"
            : "carousel-item apple-card flex flex-col justify-between overflow-hidden";
          const fitClass = proj.imgFit || "object-cover object-center";
          const numStr = (idx + 1) < 10 ? `0${idx + 1}` : `${idx + 1}`;
          const totStr = filtered.length < 10 ? `0${filtered.length}` : `${filtered.length}`;

          return `
            <article id="${proj.id}" class="${itemClass}" data-project-index="${idx}">
              <div>
                <div class="relative h-40 sm:h-44 overflow-hidden border-b" style="border-color: var(--line); background: var(--canvas);">
                  <img src="${proj.image}" data-fallback="${proj.fallback}" alt="${title}" class="proj-card-img w-full h-full ${fitClass} transition-transform duration-500 hover:scale-105" />
                  <div class="absolute top-2.5 left-2.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide shadow-sm" style="background: var(--paper); color: var(--blue); border: 1px solid var(--line);">
                      ${proj.badge}
                    </span>
                  </div>
                </div>
                <div class="p-4 sm:p-5 space-y-1.5">
                  <div class="text-[11px] font-semibold truncate" style="color: var(--muted);">${role}</div>
                  <h3 class="text-sm sm:text-[15px] font-bold leading-snug line-clamp-2" style="color: var(--ink);">${title}</h3>
                  <p class="text-[11.5px] leading-relaxed line-clamp-2" style="color: var(--secondary);">${summary}</p>
                </div>
              </div>
              <div class="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 space-y-3">
                <div class="flex flex-wrap gap-1">
                  ${proj.tags.slice(0, 3).map((t) => `<span class="tag-pill !text-[10px] !py-0.5 !px-2">${t}</span>`).join("")}
                </div>
                <div class="pt-2 border-t flex items-center justify-between" style="border-color: var(--line);">
                  <button type="button" class="open-project-modal-btn text-[11px] font-extrabold hover:underline flex items-center gap-1" style="color: var(--blue);" data-project-id="${proj.id}">
                    <span>${detailLabel}</span>
                  </button>
                  <span class="text-[10px] font-mono" style="color: var(--muted);">${numStr} / ${totStr}</span>
                </div>
              </div>
            </article>
          `;
        }).join("");

        const counter = $("#carousel-counter");
        if (counter) {
          const totStr = filtered.length < 10 ? `0${filtered.length}` : `${filtered.length}`;
          counter.textContent = `01 / ${totStr}`;
        }

        $$(".proj-card-img").forEach((img) => {
          img.addEventListener("error", function () {
            const fb = this.getAttribute("data-fallback");
            if (fb && this.src !== fb) {
              this.src = fb;
            }
          });
        });

        $$(".open-project-modal-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            openProjectModal(btn.getAttribute("data-project-id"));
          });
        });
      }

      // Render Public Speaking & Volunteers (Slide 5: Individual Cards per Event)
      function renderSpeakingVolunteers() {
        const grid = $("#speaking-volunteers-grid");
        if (!grid) return;

        grid.innerHTML = SPEAKING_VOLUNTEERS.map((item) => {
          const title = currentLang === "id" ? item.title_id : item.title_en;
          const period = currentLang === "id" ? item.period_id : item.period_en;
          const desc = currentLang === "id" ? item.desc_id : item.desc_en;

          return `
            <article id="${item.id || ""}" class="apple-card flex flex-col justify-between overflow-hidden">
              <div>
                <div class="relative h-32 sm:h-36 overflow-hidden border-b" style="border-color: var(--line); background: var(--canvas);">
                  <img src="${item.image}" data-fallback="${item.fallback}" alt="${title}" class="speak-card-img w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />
                  <div class="absolute top-2 left-2">
                    <span class="px-2 py-0.5 rounded-full text-[9.5px] font-extrabold tracking-wide shadow-sm" style="background: var(--paper); color: var(--blue); border: 1px solid var(--line);">
                      ${item.badge}
                    </span>
                  </div>
                </div>
                <div class="p-3.5 sm:p-4 space-y-1">
                  <div class="text-[10.5px] font-mono font-semibold" style="color: var(--muted);">${period}</div>
                  <h3 class="text-xs sm:text-[13.5px] font-bold leading-snug line-clamp-2" style="color: var(--ink);">${title}</h3>
                  <div class="text-[11px] font-semibold truncate" style="color: var(--blue);">${item.org}</div>
                  <p class="text-[11px] leading-snug pt-0.5 line-clamp-2" style="color: var(--secondary);">${desc}</p>
                </div>
              </div>
              <div class="px-3.5 sm:px-4 pb-3.5 pt-1">
                <div class="flex flex-wrap gap-1">
                  ${item.tags.slice(0, 2).map((t) => `<span class="tag-pill !text-[9.5px] !py-0.5 !px-2">${t}</span>`).join("")}
                </div>
              </div>
            </article>
          `;
        }).join("");

        $$(".speak-card-img").forEach((img) => {
          img.addEventListener("error", function () {
            const fb = this.getAttribute("data-fallback");
            if (fb && this.src !== fb) {
              this.src = fb;
            }
          });
        });
      }

      let showAllCerts = false;

      function updateCertsToggleLabel() {
        const labelEl = $("#toggle-certs-more-label");
        if (!labelEl) return;
        const hiddenCount = Math.max(0, CERTIFICATES.length - 3);
        if (showAllCerts) {
          labelEl.textContent = currentLang === "id" ? "Tampilkan Lebih Sedikit ↑" : "Show Less ↑";
        } else {
          labelEl.textContent = currentLang === "id"
            ? `Lihat Selengkapnya (+${hiddenCount} Sertifikat Lainnya) ↓`
            : `Show More (+${hiddenCount} More Certificates) ↓`;
        }
      }

      function renderCertificatesGallery() {
        const grid = $("#certificates-gallery-grid");
        if (!grid) return;

        const viewCertLabel = currentLang === "id" ? "Perbesar Sertifikat" : "Enlarge Certificate";
        const driveLabel = currentLang === "id" ? "Google Drive ↗" : "Google Drive ↗";

        grid.innerHTML = CERTIFICATES.map((c, idx) => {
          const title = currentLang === "id" ? c.title_id : c.title_en;
          const date = currentLang === "id" ? c.date_id : c.date_en;
          const desc = currentLang === "id" ? c.desc_id : c.desc_en;
          const hiddenCls = idx >= 3 && !showAllCerts ? "hidden" : "flex";

          return `
            <article id="${c.id}" class="apple-card ${hiddenCls} flex-col justify-between overflow-hidden">
              <div>
                <div class="relative h-44 sm:h-48 overflow-hidden border-b p-2 flex items-center justify-center cursor-pointer open-cert-modal-trigger" data-cert-id="${c.id}" style="border-color: var(--line); background: var(--canvas);">
                  <img src="${c.image}" data-fallback="${c.fallback}" alt="${title}" class="cert-card-img w-full h-full object-contain transition-transform duration-500 hover:scale-[1.03]" />
                  <div class="absolute top-2.5 left-2.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[9.5px] font-extrabold tracking-wide shadow-sm" style="background: var(--paper); color: var(--blue); border: 1px solid var(--line);">
                      ${c.badge}
                    </span>
                  </div>
                </div>
                <div class="p-4 space-y-1.5">
                  <div class="flex items-center justify-between gap-2 text-[10.5px] font-mono font-semibold" style="color: var(--muted);">
                    <span class="truncate">${c.credId}</span>
                    <span class="shrink-0">${date}</span>
                  </div>
                  <h3 class="text-xs sm:text-[13.5px] font-bold leading-snug line-clamp-2" style="color: var(--ink);">${title}</h3>
                  <div class="text-[11px] font-semibold truncate" style="color: var(--blue);">${c.issuer}</div>
                  <p class="text-[11px] leading-relaxed line-clamp-2" style="color: var(--secondary);">${desc}</p>
                </div>
              </div>
              <div class="px-4 pb-4 pt-2 border-t flex items-center justify-between gap-2" style="border-color: var(--line);">
                <button type="button" class="open-cert-modal-trigger text-[11px] font-extrabold hover:underline" style="color: var(--blue);" data-cert-id="${c.id}">
                  ${viewCertLabel}
                </button>
                <a href="${c.driveUrl}" target="_blank" rel="noopener noreferrer" class="text-[11px] font-semibold hover:underline" style="color: var(--secondary);">
                  ${driveLabel}
                </a>
              </div>
            </article>
          `;
        }).join("");

        $$(".cert-card-img").forEach((img) => {
          img.addEventListener("error", function () {
            const fb = this.getAttribute("data-fallback");
            if (fb && this.src !== fb) {
              this.src = fb;
            }
          });
        });

        $$(".open-cert-modal-trigger").forEach((el) => {
          el.addEventListener("click", () => {
            openProjectModal(el.getAttribute("data-cert-id"));
          });
        });

        updateCertsToggleLabel();
      }

      function openProjectModal(itemId) {
        const proj = PROJECTS.find((p) => p.id === itemId);
        const cert = CERTIFICATES.find((c) => c.id === itemId);
        const item = proj || cert;
        if (!item) return;

        $("#modal-project-badge").textContent = item.badge;
        $("#modal-project-title").textContent = currentLang === "id" ? item.title_id : item.title_en;
        $("#modal-project-role").textContent = proj
          ? (currentLang === "id" ? proj.role_id : proj.role_en)
          : `${cert.issuer} · ${cert.credId} (${currentLang === "id" ? cert.date_id : cert.date_en})`;
        const modalImg = $("#modal-project-img");
        modalImg.src = item.image;
        modalImg.onerror = function () {
          this.onerror = null;
          this.src = item.fallback;
        };
        modalImg.alt = currentLang === "id" ? item.title_id : item.title_en;
        $("#modal-project-desc").textContent = proj
          ? (currentLang === "id" ? proj.summary_id : proj.summary_en)
          : (currentLang === "id" ? cert.desc_id : cert.desc_en);

        const highlights = currentLang === "id" ? item.highlights_id : item.highlights_en;
        $("#modal-project-highlights").innerHTML = highlights.map((h) => `<li>${h}</li>`).join("");
        $("#modal-project-tags").innerHTML = item.tags.map((t) => `<span class="tag-pill">${t}</span>`).join("");

        const driveBtn = $("#modal-drive-link");
        const driveLabel = $("#modal-drive-link-label");
        if (driveBtn) {
          if (cert && cert.driveUrl) {
            driveBtn.href = cert.driveUrl;
            driveBtn.classList.remove("hidden");
            if (driveLabel) {
              driveLabel.textContent = currentLang === "id" ? "Buka Dokumen Asli di Google Drive ↗" : "Open Original Certificate on Google Drive ↗";
            }
          } else {
            driveBtn.classList.add("hidden");
          }
        }

        const modal = $("#project-modal");
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }

      function closeProjectModal() {
        const modal = $("#project-modal");
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }

      function renderExperiences() {
        const list = $("#experience-timeline-list");
        if (!list) return;

        const filtered = EXPERIENCES.filter((e) =>
          currentExpFilter === "all" || e.category === currentExpFilter
        );

        list.innerHTML = filtered.map((exp) => {
          const period = currentLang === "id" ? exp.period_id : exp.period_en;
          const role = currentLang === "id" ? exp.role_id : exp.role_en;
          const points = currentLang === "id" ? exp.points_id : exp.points_en;

          return `
            <div id="${exp.id}" class="cv-timeline-item apple-card p-3.5 sm:p-4">
              <span class="cv-timeline-dot" aria-hidden="true"></span>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <h3 class="text-xs sm:text-[13.5px] font-bold leading-snug" style="color: var(--ink);">${role}</h3>
                  <span class="text-[11px] font-semibold" style="color: var(--blue);">· ${exp.org}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="tag-pill !text-[9px] !py-0.5 !px-2">${exp.badge}</span>
                  <span class="text-[10.5px] font-mono font-semibold" style="color: var(--muted);">${period}</span>
                </div>
              </div>
              <ul class="list-disc pl-4 space-y-0.5 text-[11px] leading-snug" style="color: var(--secondary);">
                ${points.map((pt) => `<li class="line-clamp-1 sm:line-clamp-2">${pt}</li>`).join("")}
              </ul>
            </div>
          `;
        }).join("");
      }

      function renderPrintableCV() {
        const area = $("#cv-printable-area");
        if (!area) return;

        const styleBlock = "\n<style>\n  #cv-printable-area .cv-paper-sheet {\n    font-family: \"Inter\", \"Noto Sans\", Calibri, Arial, sans-serif;\n    color: #111111;\n    background: #ffffff;\n    padding: 28px 34px;\n    border-radius: 16px;\n    border: 1px solid rgba(15,23,42,0.12);\n    box-shadow: 0 8px 28px rgba(15,23,42,0.06);\n    line-height: 1.42;\n    font-size: 13px;\n    max-width: 960px;\n    margin: 0 auto;\n  }\n  #cv-printable-area .cv-paper-sheet a {\n    color: #111111;\n    text-decoration: none;\n  }\n  #cv-printable-area .cv-paper-sheet a:hover {\n    text-decoration: underline;\n    color: #0068d9;\n  }\n  #cv-printable-area .cv-paper-sheet .cv-header {\n    text-align: center;\n    margin-bottom: 12px;\n  }\n  #cv-printable-area .cv-paper-sheet h1 {\n    font-size: 24px;\n    font-weight: 700;\n    color: #000000;\n    margin: 0 0 6px 0;\n  }\n  #cv-printable-area .cv-paper-sheet .contact-row {\n    font-size: 12px;\n    margin: 0 0 3px 0;\n    color: #111111;\n  }\n  #cv-printable-area .cv-paper-sheet .contact-item {\n    display: inline-block;\n    margin: 0 6px;\n  }\n  #cv-printable-area .cv-paper-sheet h2 {\n    font-size: 13.5px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.35px;\n    color: #000000;\n    margin: 14px 0 3px 0;\n  }\n  #cv-printable-area .cv-paper-sheet hr {\n    border: none;\n    border-bottom: 1.5px solid #000000;\n    margin: 0 0 8px 0;\n  }\n  #cv-printable-area .cv-paper-sheet .entry {\n    margin-bottom: 9px;\n  }\n  #cv-printable-area .cv-paper-sheet .entry-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    gap: 12px;\n    flex-wrap: wrap;\n  }\n  #cv-printable-area .cv-paper-sheet .entry-title {\n    font-weight: 700;\n    color: #000000;\n    font-size: 13.2px;\n  }\n  #cv-printable-area .cv-paper-sheet .entry-date {\n    font-size: 12.2px;\n    color: #111111;\n    white-space: nowrap;\n  }\n  #cv-printable-area .cv-paper-sheet .entry-subtitle {\n    font-size: 12.8px;\n    color: #111111;\n    margin-bottom: 2px;\n  }\n  #cv-printable-area .cv-paper-sheet p {\n    margin: 0 0 6px 0;\n    text-align: justify;\n  }\n  #cv-printable-area .cv-paper-sheet ul {\n    list-style-type: disc;\n    margin: 0 0 6px 0;\n    padding-left: 18px;\n  }\n  #cv-printable-area .cv-paper-sheet li {\n    margin-bottom: 2.5px;\n  }\n  #cv-printable-area .cv-paper-sheet .sub-label {\n    font-weight: 700;\n    color: #000000;\n    margin: 5px 0 2px 0;\n  }\n  #cv-printable-area .cv-paper-sheet .skills-para {\n    margin: 0 0 5px 0;\n    text-align: left;\n  }\n</style>\n";
        const htmlId = "<header class=\"cv-header\">\n      <h1>Muhamad Nabhan Azmi</h1>\n      <div class=\"contact-row\">\n        <span class=\"contact-item\"><a href=\"mailto:muhamad.nabhan.n4azmi@gmail.com\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z\"/></svg>muhamad.nabhan.n4azmi@gmail.com</a></span>\n        <span class=\"contact-item\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z\"/></svg>DKI Jakarta, Indonesia</span>\n        <span class=\"contact-item\"><a href=\"https://www.instagram.com/nabhanzm/\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z\"/></svg>nabhanzm</a></span>\n      </div>\n      <div class=\"contact-row\">\n        <span class=\"contact-item\"><a href=\"https://www.linkedin.com/in/muhamad-nabhan-azmi-78b369320\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z\"/></svg>linkedin.com/in/muhamadnabhanazmi</a></span>\n        <span class=\"contact-item\"><a href=\"https://nabhan17-piaxe.github.io/WebsitePortofolio-MuhamadNabhanAzmi/\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"/></svg>nabhan17-piaxe.github.io/WebsitePortofolio-MuhamadNabhanAzmi</a></span>\n      </div>\n    </header>\n\n    <h2>DESKRIPSI DIRI</h2>\n    <hr>\n    <p>\n      Mahasiswa Teknik Elektro yang berfokus pada pengembangan ekosistem teknologi inklusif berbasis <em>Internet of Things</em> (IoT), robotika, dan <em>Intelligent Control System</em>. Berpengalaman memimpin pengembangan SDM, menginkubasi riset inovasi di komunitas IoT, membimbing praktikum laboratorium, serta <em>public speaking</em> dan manajemen acara.\n    </p>\n\n    <h2>PENDIDIKAN</h2>\n    <hr>\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Universitas Pembangunan Nasional &ldquo;Veteran&rdquo; Jakarta</span>\n        <span class=\"entry-date\">2024 &ndash; sekarang</span>\n      </div>\n      <div class=\"entry-subtitle\">S-1 Teknik Elektro, IPK terkini 3.49/4.00</div>\n    </div>\n\n    <h2>PENGALAMAN</h2>\n    <hr>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Intelligent Control System Research Team UPNVJ</span>\n        <span class=\"entry-date\">Sep 2026 &ndash; Present</span>\n      </div>\n      <div class=\"entry-subtitle\">Anggota Tim Riset Sistem Kendali Cerdas</div>\n      <ul>\n        <li>Mengembangkan navigasi robot <em>Omni-Wheel AGV</em> (<em>Dynamic Programming</em>) dan PJU surya berbasis <em>Fuzzy Logic</em>.</li>\n        <li>Merancang integrasi algoritma kendali optimal, sensor-aktuator, dan pengujian <em>hardware</em> skala laboratorium.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Google Indonesia</span>\n        <span class=\"entry-date\">Apr 2026 &ndash; Jul 2026</span>\n      </div>\n      <div class=\"entry-subtitle\">Google Student Ambassador 2026</div>\n      <ul>\n        <li>Menginisiasi program literasi teknologi dan memimpin kampanye produk <em>Google</em> &amp; AI di lingkungan kampus.</li>\n        <li>Memfasilitasi diskusi dan kolaborasi mahasiswa lintas disiplin untuk membangun ekosistem teknologi yang inklusif.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Kelompok Studi Mahasiswa Internet Of Things UPNVJ</span>\n        <span class=\"entry-date\">Jan 2026 &ndash; Present</span>\n      </div>\n      <div class=\"entry-subtitle\">Kepala Departemen Human Resource Development</div>\n      <ul>\n        <li>Memimpin strategi inovasi IoT berbasis riset dan data (proyek <em>Smart Hybrid Drying Dome</em> KARSA &amp; <em>TransHealth-AI</em>).</li>\n        <li>Memfasilitasi peningkatan kapasitas teknis anggota melalui lokakarya metodologi riset dan tinjauan proyek berkala.</li>\n        <li>Mengelola program inkubasi ide dan silabus <em>Design Thinking</em>.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Asisten Laboratorium Teknik Elektro</span>\n        <span class=\"entry-date\">Aug 2025 &ndash; Present</span>\n      </div>\n      <div class=\"entry-subtitle\">Asisten Laboratorium</div>\n      <ul>\n        <li>Membimbing praktikum Pengukuran Besaran Listrik, Fisika Dasar, dan Sistem Digital bagi &plusmn;100 mahasiswa.</li>\n        <li>Memfasilitasi pemahaman konsep teoretis serta menangani <em>troubleshooting</em> alat ukur dan komponen <em>hardware</em>.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Bela Negara Festival Vol. 7 (Festival Musik)</span>\n        <span class=\"entry-date\">Apr 2025 &ndash; Dec 2025</span>\n      </div>\n      <div class=\"entry-subtitle\">Staf Divisi General Support</div>\n      <ul>\n        <li>Merancang prosedur operasional standar (SOP) acara dan bertindak sebagai <em>Liaison Officer Internal</em> antar divisi.</li>\n        <li>Mengoordinasikan kenyamanan alur &plusmn;9.000 pengunjung serta memimpin koordinasi 35 <em>volunteer</em>.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Kelompok Studi Mahasiswa Internet Of Things UPNVJ</span>\n        <span class=\"entry-date\">Jan 2025 &ndash; Dec 2025</span>\n      </div>\n      <div class=\"entry-subtitle\">Staf Divisi Hardware Engineer</div>\n      <ul>\n        <li>Mengembangkan proyek riset dan kompetisi (<em>smart room</em>, robot sumo, dan robot <em>transporter</em>).</li>\n        <li>Merancang prototipe <em>hardware</em> 3D (<em>Fusion 360</em>), desain &amp; <em>etching</em> PCB (<em>EasyEDA</em>, <em>Proteus</em>), serta pengujian sistem.</li>\n        <li>Menjadi perwakilan pembicara pada kegiatan edukasi teknologi serta berperan dalam pengelolaan acara internal.</li>\n      </ul>\n    </div>\n\n    <h2>SERTIFIKASI DAN PENGHARGAAN</h2>\n    <hr>\n    <div class=\"sub-label\">Sertifikasi</div>\n    <ul>\n      <li>Sertifikat <em>Google Student Ambassador &mdash; Class of 2026</em> by <em>Google Gemini Southeast Asia</em>.</li>\n      <li>Sertifikat <em>AI for Work &amp; Career Readiness with Google AI Products</em> by <em>Hacktiv8 Indonesia &times; Google.org</em>.</li>\n      <li>Sertifikat Asisten Praktikum Sistem Digital, Fisika, dan Pengukuran Besaran Listrik by Fakultas Teknik UPNVJ.</li>\n    </ul>\n    <div class=\"sub-label\">Penghargaan</div>\n    <ul>\n      <li>Tim Terbaik 1 Tingkat Regional &ndash; Program Astra Honda SDGs Future Leaders 2026 &ndash; &ldquo;Sistem Pengering Hibrida Cerdas Penyelamat Nilai Ekonomi Kopi Desa Talang Empat di Era Krisis Iklim&rdquo;.</li>\n    </ul>\n\n    <h2>KETERAMPILAN DAN KETERTARIKAN</h2>\n    <hr>\n    <div class=\"skills-para\">\n      <strong>Keterampilan Non-teknis:</strong> <em>Leadership</em> | <em>Public Speaking</em> | <em>Problem Solving</em> | <em>Communication &amp; Customer Handling</em> | <em>Teamwork &amp; Event Coordination</em> | <em>Responsibility &amp; Discipline</em> | <em>Time Management</em> | <em>Adaptability &amp; Fast Learner</em>.\n    </div>\n    <div class=\"skills-para\">\n      <strong>Keterampilan Teknis:</strong> <em>Hardware Development &amp; Prototyping (Fusion 360, Ultimaker Cura, Tinkercad)</em> | <em>PCB Design (EasyEDA, KiCad, Proteus)</em> | <em>Programming, Control &amp; AI Tools (Python, Arduino IDE, C/C++, Fuzzy Logic, Dynamic Programming, MATLAB)</em> | <em>Hardware Troubleshooting</em> | <em>Google Workspace &amp; Microsoft Office</em> | <em>Event Management &amp; Technical Crew Coordination</em>.\n    </div>\n    <div class=\"skills-para\">\n      <strong>Ketertarikan:</strong> <em>Tech Community Building</em> | <em>Digital Innovation</em> | <em>Internet of Things (IoT)</em> | <em>Robotics &amp; Intelligent Control System</em> | <em>Tech Education</em> | <em>Event Management</em>.\n    </div>";
        const htmlEn = "<header class=\"cv-header\">\n      <h1>Muhamad Nabhan Azmi</h1>\n      <div class=\"contact-row\">\n        <span class=\"contact-item\"><a href=\"mailto:muhamad.nabhan.n4azmi@gmail.com\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z\"/></svg>muhamad.nabhan.n4azmi@gmail.com</a></span>\n        <span class=\"contact-item\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z\"/></svg>DKI Jakarta, Indonesia</span>\n        <span class=\"contact-item\"><a href=\"https://www.instagram.com/nabhanzm/\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z\"/></svg>nabhanzm</a></span>\n      </div>\n      <div class=\"contact-row\">\n        <span class=\"contact-item\"><a href=\"https://www.linkedin.com/in/muhamad-nabhan-azmi-78b369320\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z\"/></svg>linkedin.com/in/muhamadnabhanazmi</a></span>\n        <span class=\"contact-item\"><a href=\"https://nabhan17-piaxe.github.io/WebsitePortofolio-MuhamadNabhanAzmi/\"><svg viewBox=\"0 0 24 24\" width=\"11\" height=\"11\" style=\"display:inline-block;vertical-align:-1.5px;margin-right:3px;\" fill=\"currentColor\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"/></svg>nabhan17-piaxe.github.io/WebsitePortofolio-MuhamadNabhanAzmi</a></span>\n      </div>\n    </header>\n\n    <h2>PROFILE SUMMARY</h2>\n    <hr>\n    <p>\n      Electrical Engineering undergraduate focused on developing an inclusive technology ecosystem based on <em>Internet of Things</em> (IoT), robotics, and <em>Intelligent Control Systems</em>. Experienced in leading human resource development, incubating research-driven innovations within an IoT community, mentoring university laboratory practicums, as well as <em>public speaking</em> and event management.\n    </p>\n\n    <h2>EDUCATION</h2>\n    <hr>\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Universitas Pembangunan Nasional &ldquo;Veteran&rdquo; Jakarta</span>\n        <span class=\"entry-date\">2024 &ndash; Present</span>\n      </div>\n      <div class=\"entry-subtitle\">Bachelor of Engineering in Electrical Engineering, Current GPA: 3.49/4.00</div>\n    </div>\n\n    <h2>EXPERIENCE</h2>\n    <hr>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Intelligent Control System Research Team UPNVJ</span>\n        <span class=\"entry-date\">Sep 2026 &ndash; Present</span>\n      </div>\n      <div class=\"entry-subtitle\">Intelligent Control System Research Team Member</div>\n      <ul>\n        <li>Develop <em>Omni-Wheel AGV</em> robot navigation (<em>Dynamic Programming</em>) and <em>Fuzzy Logic</em> solar street lighting.</li>\n        <li>Design optimal control algorithm integration, sensor-actuator interfacing, and laboratory-scale <em>hardware</em> testing.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Google Indonesia</span>\n        <span class=\"entry-date\">Apr 2026 &ndash; Jul 2026</span>\n      </div>\n      <div class=\"entry-subtitle\">Google Student Ambassador 2026</div>\n      <ul>\n        <li>Initiated technology literacy programs and led <em>Google</em> &amp; AI product campaigns across the university campus.</li>\n        <li>Facilitated cross-disciplinary student collaboration to build an inclusive technology ecosystem.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Kelompok Studi Mahasiswa Internet Of Things UPNVJ</span>\n        <span class=\"entry-date\">Jan 2026 &ndash; Present</span>\n      </div>\n      <div class=\"entry-subtitle\">Head of Human Resource Development Department</div>\n      <ul>\n        <li>Lead research- and data-driven IoT innovation strategies (<em>Smart Hybrid Drying Dome</em> KARSA &amp; <em>TransHealth-AI</em>).</li>\n        <li>Facilitate member technical capacity building via research methodology workshops and periodic project reviews.</li>\n        <li>Manage idea incubation programs and the <em>Design Thinking</em> syllabus.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Electrical Engineering Laboratory UPNVJ</span>\n        <span class=\"entry-date\">Aug 2025 &ndash; Present</span>\n      </div>\n      <div class=\"entry-subtitle\">Laboratory Teaching Assistant</div>\n      <ul>\n        <li>Mentor Electrical Measurement, Basic Physics, and Digital Systems practicums for &plusmn;100 students.</li>\n        <li>Facilitate theoretical concept comprehension and handle <em>troubleshooting</em> of instruments and <em>hardware</em> components.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Bela Negara Festival Vol. 7 (Music Festival)</span>\n        <span class=\"entry-date\">Apr 2025 &ndash; Dec 2025</span>\n      </div>\n      <div class=\"entry-subtitle\">General Support Division Staff</div>\n      <ul>\n        <li>Designed event Standard Operating Procedures (SOPs) and served as <em>Internal Liaison Officer</em> across divisions.</li>\n        <li>Coordinated crowd flow and comfort for &plusmn;9,000 attendees while leading a team of 35 <em>volunteers</em>.</li>\n      </ul>\n    </div>\n\n    <div class=\"entry\">\n      <div class=\"entry-row\">\n        <span class=\"entry-title\">Kelompok Studi Mahasiswa Internet Of Things UPNVJ</span>\n        <span class=\"entry-date\">Jan 2025 &ndash; Dec 2025</span>\n      </div>\n      <div class=\"entry-subtitle\">Hardware Engineer Division Staff</div>\n      <ul>\n        <li>Developed research and competition projects (<em>smart room</em>, sumo robot, and wireless <em>transporter</em> robot).</li>\n        <li>Designed 3D <em>hardware</em> prototypes (<em>Fusion 360</em>), PCB <em>etching</em> layouts (<em>EasyEDA</em>, <em>Proteus</em>), and system testing.</li>\n        <li>Served as speaker representative at technology education events and contributed to internal event management.</li>\n      </ul>\n    </div>\n\n    <h2>CERTIFICATIONS AND AWARDS</h2>\n    <hr>\n    <div class=\"sub-label\">Certifications</div>\n    <ul>\n      <li>Certificate of <em>Google Student Ambassador &mdash; Class of 2026</em> by <em>Google Gemini Southeast Asia</em>.</li>\n      <li>Certificate of <em>AI for Work &amp; Career Readiness with Google AI Products</em> by <em>Hacktiv8 Indonesia &times; Google.org</em>.</li>\n      <li>Certificate of Laboratory Teaching Assistant in Digital Systems, Physics, and Electrical Measurement by FT UPNVJ.</li>\n    </ul>\n    <div class=\"sub-label\">Awards</div>\n    <ul>\n      <li>1st Best Team (Regional Level) &ndash; Astra Honda SDGs Future Leaders 2026 Program &ndash; &ldquo;Smart Hybrid Drying System to Safeguard the Economic Value of Talang Empat Village Coffee in the Climate Crisis Era&rdquo;.</li>\n    </ul>\n\n    <h2>SKILLS AND INTERESTS</h2>\n    <hr>\n    <div class=\"skills-para\">\n      <strong>Soft Skills:</strong> <em>Leadership</em> | <em>Public Speaking</em> | <em>Problem Solving</em> | <em>Communication &amp; Customer Handling</em> | <em>Teamwork &amp; Event Coordination</em> | <em>Responsibility &amp; Discipline</em> | <em>Time Management</em> | <em>Adaptability &amp; Fast Learner</em>.\n    </div>\n    <div class=\"skills-para\">\n      <strong>Technical Skills:</strong> <em>Hardware Development &amp; Prototyping (Fusion 360, Ultimaker Cura, Tinkercad)</em> | <em>PCB Design (EasyEDA, KiCad, Proteus)</em> | <em>Programming, Control &amp; AI Tools (Python, Arduino IDE, C/C++, Fuzzy Logic, Dynamic Programming, MATLAB)</em> | <em>Hardware Troubleshooting</em> | <em>Google Workspace &amp; Microsoft Office</em> | <em>Event Management &amp; Technical Crew Coordination</em>.\n    </div>\n    <div class=\"skills-para\">\n      <strong>Interests:</strong> <em>Tech Community Building</em> | <em>Digital Innovation</em> | <em>Internet of Things (IoT)</em> | <em>Robotics &amp; Intelligent Control System</em> | <em>Tech Education</em> | <em>Event Management</em>.\n    </div>";

        const driveIdUrl = "https://drive.google.com/file/d/1beBwSeoA3v-gV8WU8jJQlkUxm2mLl0jZ/view?usp=drive_link";
        const driveEnUrl = "https://drive.google.com/file/d/1Gec4hqxWmHrlxX6Kldy2pFNB_U3vOkll/view?usp=drive_link";
        const activeDriveBtn = $("#cv-modal-drive-active-btn");
        if (activeDriveBtn) {
          activeDriveBtn.href = currentCvLang === "id" ? driveIdUrl : driveEnUrl;
          activeDriveBtn.textContent = currentCvLang === "id" ? "Buka GDrive (ID) ↗" : "Open GDrive (ENG) ↗";
        }
        if (currentCvLang === "id") {
          area.innerHTML = styleBlock + `<div class="cv-paper-sheet">` + htmlId + `</div>`;
        } else {
          area.innerHTML = styleBlock + `<div class="cv-paper-sheet">` + htmlEn + `</div>`;
        }
      }


      function applyLanguage() {
        const dict = I18N[currentLang] || I18N.id;
        $$("[data-i18n]").forEach((el) => {
          const key = el.getAttribute("data-i18n");
          if (dict[key]) el.textContent = dict[key];
        });
        const indId = $("#lang-ind-id");
        const indEn = $("#lang-ind-en");
        if (indId && indEn) {
          indId.style.color = currentLang === "id" ? "var(--blue)" : "var(--muted)";
          indEn.style.color = currentLang === "en" ? "var(--blue)" : "var(--muted)";
        }
        const viewLabel = $("#view-mode-label");
        if (viewLabel) {
          viewLabel.textContent = isGridView ? dict.btn_view_carousel : dict.btn_view_grid;
        }
        renderSkillsJson();
        renderProjects();
        renderSpeakingVolunteers();
        renderCertificatesGallery();
        renderExperiences();
        renderPrintableCV();
      }

      function startAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(() => {
          if (!isAutoPlaying || isGridView) return;
          const container = $("#projects-container");
          if (!container) return;
          const maxScroll = container.scrollWidth - container.clientWidth;
          if (maxScroll <= 10) return;
          if (container.scrollLeft >= maxScroll - 20) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: 360, behavior: "smooth" });
          }
        }, 4200);
      }

      function initPortfolio() {
        currentLang = getSavedPref("nabhan_lang", "id");
        currentCvLang = currentLang;

        const savedTheme = getSavedPref("nabhan_theme", "light");
        if (savedTheme === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.setAttribute("data-theme", "dark");
          const ti = $("#theme-icon");
          if (ti) ti.textContent = "☀️";
        } else {
          document.documentElement.setAttribute("data-theme", "light");
        }

        // Typed specialty ticker
        const typedEl = $("#typed-specialty");
        if (typedEl) {
          setInterval(() => {
            const list = TYPED_STRINGS[currentLang] || TYPED_STRINGS.id;
            typedIdx = (typedIdx + 1) % list.length;
            typedEl.textContent = list[typedIdx];
          }, 2800);
        }

        // Hero photo switch
        const heroImg = $("#hero-profile-img");
        if (heroImg) {
          heroImg.onerror = function () {
            this.onerror = null;
            this.src = AVATAR_SVG_URI;
          };
        }
        const aboutImg = $("#about-me-photo");
        if (aboutImg) {
          aboutImg.onerror = function () {
            this.onerror = null;
            this.src = "assets/about_nabhan_mc.jpg";
          };
        }
        const switchPhotoBtn = $("#switch-photo-btn");
        if (switchPhotoBtn && heroImg) {
          switchPhotoBtn.addEventListener("click", () => {
            photoMode = photoMode === 0 ? 1 : 0;
            heroImg.src = photoMode === 0 ? IMG_HRD_MARSEL : IMG_HRD_CROP;
          });
        }

        // Language toggle
        const langBtn = $("#lang-toggle-btn");
        if (langBtn) {
          langBtn.addEventListener("click", () => {
            currentLang = currentLang === "id" ? "en" : "id";
            currentCvLang = currentLang;
            setSavedPref("nabhan_lang", currentLang);
            $$(".cv-version-btn").forEach((b) => {
              b.classList.toggle("active", b.getAttribute("data-cv-lang") === currentCvLang);
            });
            applyLanguage();
          });
        }

        // Theme toggle
        const themeBtn = $("#theme-toggle-btn");
        if (themeBtn) {
          themeBtn.addEventListener("click", () => {
            const isDark = document.documentElement.classList.toggle("dark");
            document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
            setSavedPref("nabhan_theme", isDark ? "dark" : "light");
            const ti = $("#theme-icon");
            if (ti) ti.textContent = isDark ? "☀️" : "🌙";
          });
        }

        // Mobile menu toggle
        const mobBtn = $("#mobile-menu-btn");
        const mobDrawer = $("#mobile-menu-drawer");
        if (mobBtn && mobDrawer) {
          mobBtn.addEventListener("click", () => {
            mobDrawer.classList.toggle("hidden");
          });
          $$("#mobile-menu-drawer a").forEach((a) => {
            a.addEventListener("click", () => mobDrawer.classList.add("hidden"));
          });
        }

        // Project filter tabs
        $$("#project-filter-bar .filter-tab").forEach((tab) => {
          tab.addEventListener("click", () => {
            $$("#project-filter-bar .filter-tab").forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            currentCategory = tab.getAttribute("data-filter") || tab.getAttribute("data-category") || "all";
            renderProjects();
          });
        });

        // Carousel & Grid controls
        const prevBtn = $("#carousel-prev-btn");
        const nextBtn = $("#carousel-next-btn");
        const playBtn = $("#carousel-play-btn");
        const gridBtn = $("#toggle-grid-view-btn");
        if (prevBtn) {
          prevBtn.addEventListener("click", () => {
            const c = $("#projects-container");
            if (c) c.scrollBy({ left: -360, behavior: "smooth" });
          });
        }
        if (nextBtn) {
          nextBtn.addEventListener("click", () => {
            const c = $("#projects-container");
            if (c) c.scrollBy({ left: 360, behavior: "smooth" });
          });
        }
        if (playBtn) {
          playBtn.addEventListener("click", () => {
            isAutoPlaying = !isAutoPlaying;
            const icon = $("#carousel-play-icon");
            if (icon) icon.textContent = isAutoPlaying ? "⏸" : "▶";
          });
        }
        if (gridBtn) {
          gridBtn.addEventListener("click", () => {
            isGridView = !isGridView;
            const dict = I18N[currentLang] || I18N.id;
            const viewLabel = $("#view-mode-label");
            if (viewLabel) viewLabel.textContent = isGridView ? dict.btn_view_carousel : dict.btn_view_grid;
            renderProjects();
          });
        }

        // Experience filter tabs
        $$("#exp-filter-bar .filter-tab").forEach((tab) => {
          tab.addEventListener("click", () => {
            $$("#exp-filter-bar .filter-tab").forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            currentExpFilter = tab.getAttribute("data-exp-filter") || "all";
            renderExperiences();
          });
        });

        // Certificates show more toggle
        const toggleCertsBtn = $("#toggle-certs-more-btn");
        if (toggleCertsBtn) {
          toggleCertsBtn.addEventListener("click", () => {
            showAllCerts = !showAllCerts;
            renderCertificatesGallery();
          });
        }

        // Project/Cert modal close
        const closeProjBtn = $("#close-project-modal-btn");
        const closeProjBotBtn = $("#close-project-modal-bottom-btn");
        const projModal = $("#project-modal");
        if (closeProjBtn) closeProjBtn.addEventListener("click", closeProjectModal);
        if (closeProjBotBtn) closeProjBotBtn.addEventListener("click", closeProjectModal);
        if (projModal) {
          projModal.addEventListener("click", (e) => {
            if (e.target.id === "project-modal") closeProjectModal();
          });
        }

        applyLanguage();

        function openCvModal() {
          currentCvLang = currentLang;
          $$(".cv-version-btn").forEach((b) => {
            b.classList.toggle("active", b.getAttribute("data-cv-lang") === currentCvLang);
          });
          renderPrintableCV();
          const cvModal = $("#cv-modal");
          cvModal.classList.remove("hidden");
          cvModal.classList.add("flex");
        }

        function closeCvModal() {
          const cvModal = $("#cv-modal");
          cvModal.classList.add("hidden");
          cvModal.classList.remove("flex");
        }

        $("#open-cv-header-btn").addEventListener("click", openCvModal);
        $("#open-cv-hero-btn").addEventListener("click", openCvModal);
        $("#open-cv-side-btn").addEventListener("click", openCvModal);
        $("#close-cv-modal-btn").addEventListener("click", closeCvModal);
        $("#cv-modal").addEventListener("click", (e) => {
          if (e.target.id === "cv-modal") closeCvModal();
        });

        $$(".cv-version-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            $$(".cv-version-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            currentCvLang = btn.getAttribute("data-cv-lang") || "id";
            renderPrintableCV();
          });
        });

        $("#print-cv-btn").addEventListener("click", () => {
          window.print();
        });

        const emailAddr = "muhamad.nabhan.n4azmi@gmail.com";
        $("#copy-email-hero-btn").addEventListener("click", () => {
          copyTextToClipboard(
            emailAddr,
            currentLang === "id" ? "Email disalin: muhamad.nabhan.n4azmi@gmail.com" : "Copied: muhamad.nabhan.n4azmi@gmail.com"
          );
        });
                        // Smooth scroll to very top when clicking Home or any href="#top" link
        $$('a[href="#top"]').forEach((topLink) => {
          topLink.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
            document.body.scrollTo({ top: 0, behavior: "smooth" });
          });
        });

        // Active Navbar ScrollSpy matching top-to-bottom section order
        const sectionOrder = ["about-me", "projects", "experience", "speaking-volunteers", "skills", "credentials", "contact"];
        const navLinks = $$("#desktop-nav a[data-nav-target]");
        const updateActiveNavOnScroll = () => {
          const scrollPos = window.scrollY || document.documentElement.scrollTop || 0;
          let currentSection = "top";
          if (scrollPos >= 160) {
            for (const secId of sectionOrder) {
              const el = document.getElementById(secId);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 160) {
                  currentSection = secId;
                }
              }
            }
          }
          navLinks.forEach((link) => {
            const target = link.getAttribute("data-nav-target");
            if (target === currentSection) {
              link.classList.add("nav-link-active");
              link.classList.remove("nav-link");
            } else {
              link.classList.remove("nav-link-active");
              link.classList.add("nav-link");
            }
          });
        };
        window.addEventListener("scroll", updateActiveNavOnScroll, { passive: true });
        updateActiveNavOnScroll();

        const backToTopBtn = $("#global-back-to-top");
        if (backToTopBtn) {
          const toggleBackToTop = () => {
            if (window.scrollY > 240) {
              backToTopBtn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
              backToTopBtn.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
            } else {
              backToTopBtn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
              backToTopBtn.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
            }
          };
          window.addEventListener("scroll", toggleBackToTop, { passive: true });
          toggleBackToTop();
          backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        }

        const emailDropdownBtn = $("#contact-email-dropdown-btn");
        const emailMenu = $("#contact-email-menu");
        const emailChevron = $("#contact-email-chevron");
        const quickDrawer = $("#quick-contact-drawer");
        const toggleQuickFormBtn = $("#toggle-quick-form-btn");
        const closeQuickFormBtn = $("#close-quick-form-btn");

        if (emailDropdownBtn && emailMenu) {
          emailDropdownBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isHidden = emailMenu.classList.toggle("hidden");
            if (emailChevron) {
              emailChevron.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
            }
          });
          document.addEventListener("click", (e) => {
            if (!emailMenu.classList.contains("hidden") && !emailMenu.contains(e.target) && e.target !== emailDropdownBtn) {
              emailMenu.classList.add("hidden");
              if (emailChevron) emailChevron.style.transform = "rotate(0deg)";
            }
          });
        }

        if (toggleQuickFormBtn && quickDrawer) {
          toggleQuickFormBtn.addEventListener("click", () => {
            quickDrawer.classList.toggle("hidden");
            if (emailMenu) emailMenu.classList.add("hidden");
            if (emailChevron) emailChevron.style.transform = "rotate(0deg)";
          });
        }
        if (closeQuickFormBtn && quickDrawer) {
          closeQuickFormBtn.addEventListener("click", () => {
            quickDrawer.classList.add("hidden");
          });
        }

        $("#copy-email-contact-btn").addEventListener("click", () => {
          copyTextToClipboard(
            emailAddr,
            currentLang === "id" ? "Email disalin: muhamad.nabhan.n4azmi@gmail.com" : "Copied: muhamad.nabhan.n4azmi@gmail.com"
          );
          if (emailMenu) emailMenu.classList.add("hidden");
          if (emailChevron) emailChevron.style.transform = "rotate(0deg)";
        });

        $("#quick-contact-form").addEventListener("submit", (e) => {
          e.preventDefault();
          const name = $("#sender-name").value.trim();
          const topic = $("#sender-topic").value;
          const msg = $("#sender-msg").value.trim();
          const subject = encodeURIComponent(`[Portofolio] ${topic} — ${name}`);
          const bodyText = `Halo Muhamad Nabhan Azmi,\n\nPerkenalkan saya ${name}.\nTopik: ${topic}\n\n${msg}\n\nSalam,\n${name}`;
          copyTextToClipboard(
            bodyText,
            currentLang === "id"
              ? "Pesan disalin & membuka aplikasi email Anda..."
              : "Message copied & opening your email client..."
          );
          const mailtoUrl = `mailto:${emailAddr}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
          window.open(mailtoUrl, "_blank");
        });

        startAutoPlay();
      }

      document.addEventListener("DOMContentLoaded", initPortfolio);
    })();
