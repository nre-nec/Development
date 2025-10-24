import type { Project, Program, Report, Language } from '../types';

interface ContentStructure {
  header: Record<Language, { langToggle: string; nav: { about: string; projects: string; programs: string; reports: string; contact: string; } }>;
  hero: Record<Language, { title: string; subtitle: string; slogan: string; cta: string; }>;
  about: Record<Language, { title: string; text: string; cta: string; }>;
  projects: Record<Language, { title: string; }>;
  projectsData: Record<Language, Project[]>;
  programs: Record<Language, { title: string; cta: string; }>;
  programsData: Record<Language, Program[]>;
  reports: Record<Language, { title: string; }>;
  reportsData: Record<Language, Report[]>;
  contact: Record<Language, { title: string; form: { name: string; email: string; message: string; send: string; }; suggestions: string; }>;
  footer: Record<Language, { line1: string; line2: string; final: string; finalEn: string; }>;
}

export const content: ContentStructure = {
  header: {
    ar: { langToggle: 'EN', nav: { about: 'عن الإدارة', projects: 'المشاريع', programs: 'البرامج', reports: 'التقارير', contact: 'تواصل' } },
    en: { langToggle: 'ع', nav: { about: 'About', projects: 'Projects', programs: 'Programs', reports: 'Reports', contact: 'Contact' } },
  },
  hero: {
    ar: {
      title: 'إدارة التطوير والجودة',
      subtitle: 'كلية الشمال للتمريض الأهلية (NCN)',
      slogan: 'نحو تميزٍ أكاديمي مستدام وجودةٍ مؤسسية رائدة',
      cta: 'استعرض الأنظمة والمشاريع ⬇️'
    },
    en: {
      title: 'Development & Quality Management',
      subtitle: 'Northern College of Nursing (NCN)',
      slogan: 'Towards sustainable excellence and institutional quality.',
      cta: 'Explore Systems & Projects ⬇️'
    }
  },
  about: {
    ar: {
      title: 'عن الإدارة',
      text: 'تُعنى إدارة التطوير والجودة بمتابعة الأداء الأكاديمي والإداري، وضمان تطبيق معايير الجودة والاعتماد المؤسسي والبرامجي، إلى جانب الإشراف على التحسين المستمر لمخرجات التعليم والتدريب. تعمل الإدارة على أتمتة عمليات الجودة وتطوير الأنظمة الإلكترونية الداعمة لتحقيق التميز الأكاديمي.',
      cta: 'التقارير السنوية | Annual Reports'
    },
    en: {
      title: 'About the Unit',
      text: 'The Development & Quality Management Unit ensures continuous academic and administrative improvement, monitors accreditation standards, and drives the digital transformation of quality processes to achieve institutional excellence.',
      cta: 'Annual Reports'
    }
  },
  projects: {
    ar: { title: 'الأنظمة والمشاريع' },
    en: { title: 'Systems & Projects' },
  },
  projectsData: {
    ar: [
      { icon: '🩺', name: 'نظام تقييم لجنة الاستقطاب', description: 'نظام إلكتروني متكامل لأتمتة تقييم المرشحين في لجان الاستقطاب، مزود بلوحة تحكم إحصائية ونظام تقارير متقدم.', buttonText: 'استعراض', link: 'http://nre.lmss-nec.com/' },
      { icon: '📊', name: 'نظام تحليل وجدولة الاختبارات', description: 'لوحة تحكم ذكية لتحليل جداول الاختبارات وتوزيع القاعات والمراقبين آليًا، تدعم الفترات المتعددة والفلترة الزمنية المتقدمة.', buttonText: 'تجربة النظام', link: '#' },
      { icon: '📋', name: 'نظام متابعة مخرجات التعلم', description: 'أداة رقمية متقدمة لرصد وتحليل مؤشرات أداء مخرجات التعلم (PLOs)، وربطها ديناميكيًا بمصفوفات المقررات لضمان تحقيق الأهداف التعليمية.', buttonText: 'استعراض', link: '#' },
      { icon: '📱', name: 'نظام تسجيل الحضور الإلكتروني بالباركود', description: 'نظام لأتمتة تسجيل حضور الطلاب والموظفين في الفعاليات والورش باستخدام قارئ الباركود، مع لوحة متابعة آنية وتقارير حضور دقيقة.', buttonText: 'استعراض', link: 'https://nre-nec.com/registration/' },
    ],
    en: [
      { icon: '🩺', name: 'Recruitment Committee Evaluation System', description: 'An integrated electronic system for automating candidate evaluations in recruitment committees, featuring a statistical dashboard and advanced reporting capabilities.', buttonText: 'Explore', link: '#' },
      { icon: '📊', name: 'Exam Analysis & Scheduling System', description: 'A smart dashboard for analyzing exam schedules and automatically assigning halls and proctors, with support for multiple sessions and advanced time filtering.', buttonText: 'Try System', link: '#' },
      { icon: '📋', name: 'Learning Outcomes Tracking System', description: 'An advanced digital tool for monitoring and analyzing Learning Outcome Performance Indicators (PLOs) and dynamically linking them to course matrices.', buttonText: 'Explore', link: '#' },
      { icon: '📱', name: 'Barcode-Based E-Attendance System', description: 'Automates attendance tracking for students and staff at events and workshops using barcode scanning, with a live dashboard and precise reports.', buttonText: 'Explore', link: '#' },
    ],
  },
  programs: {
    ar: { title: 'مبادرات وبرامج التطوير', cta: 'عرض جدول الورش القادمة' },
    en: { title: 'Development Programs & Initiatives', cta: 'View Upcoming Workshops' },
  },
  programsData: {
    ar: [
      { image: 'https://picsum.photos/seed/workshop1/600/400', title: 'برنامج "بناء مصفوفات المخرجات التعليمية"' },
      { image: 'https://picsum.photos/seed/workshop2/600/400', title: 'ورشة "بنوك الأسئلة والتقويم الإلكتروني"' },
      { image: 'https://picsum.photos/seed/workshop3/600/400', title: 'مبادرة "الجودة الرقمية والتحول الأكاديمي"' },
      { image: 'https://picsum.photos/seed/excellence/600/400', title: 'منصة الامتياز' },
      { image: 'https://picsum.photos/seed/alumni/600/400', title: 'منصة الخريجين' },
      { image: 'https://picsum.photos/seed/communication/600/400', title: 'نظام الاتصالات الإدارية' },
    ],
    en: [
      { image: 'https://picsum.photos/seed/workshop1/600/400', title: '"Building Learning Outcome Matrices" Program' },
      { image: 'https://picsum.photos/seed/workshop2/600/400', title: '"Question Banks & E-Assessment" Workshop' },
      { image: 'https://picsum.photos/seed/workshop3/600/400', title: '"Digital Quality & Academic Transformation" Initiative' },
      { image: 'https://picsum.photos/seed/excellence/600/400', title: 'Excellence Platform' },
      { image: 'https://picsum.photos/seed/alumni/600/400', title: 'Alumni Platform' },
      { image: 'https://picsum.photos/seed/communication/600/400', title: 'Administrative Communication System' },
    ]
  },
  reports: {
    ar: { title: 'التقارير والجودة' },
    en: { title: 'Reports & Performance' },
  },
  reportsData: {
    ar: [
      { title: 'تقرير الأداء السنوي 2025', buttonText: 'تحميل', link: '#' },
      { title: 'تحليل مؤشرات الأداء الأكاديمي', buttonText: 'تحميل', link: '#' },
      { title: 'تقرير الاعتماد المؤسسي', buttonText: 'تحميل', link: '#' },
    ],
    en: [
      { title: 'Annual Performance Report 2025', buttonText: 'Download', link: '#' },
      { title: 'Academic KPI Analysis', buttonText: 'Download', link: '#' },
      { title: 'Institutional Accreditation Report', buttonText: 'Download', link: '#' },
    ],
  },
  contact: {
    ar: { title: 'تواصل معنا', form: { name: 'الاسم', email: 'البريد الإلكتروني', message: 'الرسالة', send: 'إرسال' }, suggestions: 'استمارة اقتراحات تحسين' },
    en: { title: 'Contact Us', form: { name: 'Name', email: 'Email', message: 'Message', send: 'Send' }, suggestions: 'Improvement Suggestions Form' },
  },
  footer: {
    ar: {
      line1: 'تم إعداد هذا الموقع بواسطة إدارة التطوير والجودة – كلية الشمال للتمريض الأهلية، بهدف تعزيز التواصل والشفافية ونشر ثقافة الجودة والتميز الأكاديمي.',
      line2: '© وحدة التطوير والجودة – كلية الشمال للتمريض الأهلية (NCN) | جميع الحقوق محفوظة 2025',
      final: 'تم إعداد هذا الموقع بواسطة إدارة التطوير والجودة – كلية الشمال للتمريض الأهلية، بهدف تعزيز التواصل والشفافية ونشر ثقافة الجودة والتميز الأكاديمي.',
      finalEn: 'This platform was developed by the Development & Quality Management Unit – Northern College of Nursing (NCN), to promote transparency, quality culture, and academic excellence.'
    },
    en: {
      line1: 'This platform was developed by the Development & Quality Management Unit – Northern College of Nursing (NCN), to promote transparency, quality culture, and academic excellence.',
      line2: '© Development & Quality Unit – NCN College | All Rights Reserved 2025',
      final: 'تم إعداد هذا الموقع بواسطة إدارة التطوير والجودة – كلية الشمال للتمريض الأهلية، بهدف تعزيز التواصل والشفافية ونشر ثقافة الجودة والتميز الأكاديمي.',
      finalEn: 'This platform was developed by the Development & Quality Management Unit – Northern College of Nursing (NCN), to promote transparency, quality culture, and academic excellence.'
    }
  },
};