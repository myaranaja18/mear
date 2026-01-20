

const hospitals = [
  { name: "مستشفى الشفاء", location: "مدينة غزة", phone: "082828000", details: "أكبر مستشفى في قطاع غزة، خدمات طوارئ وجراحة متقدمة." },
  { name: "مستشفى القدس", location: "تل الهوى", phone: "082828001", details: "يقدم خدمات تخصصية وطبية متنوعة." },
  { name: "مستشفى الأهلي العربي", location: "مدينة غزة", phone: "082828002", details: "خدمات طبية عامة وباطنية وقسم أطفال." },
  { name: "مستشفى كمال عدوان", location: "بيت لاهيا", phone: "082828003", details: "مستشفى حكومي يخدم شمال القطاع ويقدم خدمات جراحة عامة." },
  { name: "مستشفى ناصر", location: "خان يونس", phone: "082828004", details: "مستشفى رئيسي يقدم خدمات طبية شاملة للمنطقة الجنوبية." },
  { name: "مستشفى الشهيد عز الدين", location: "رفح", phone: "082828005", details: "قسم الطوارئ مجهز بالكامل وخدمات رعاية متقدمة." },
  { name: "مستشفى دار الشفاء", location: "الشجاعية", phone: "082828006", details: "خدمات ولادة وأطفال وعيادات تخصصية متعددة." },
  { name: "مستشفى الهلال الأحمر", location: "جباليا", phone: "082828007", details: "مركز إغاثة طبي وخدمات جراحة وإسعاف أولي." }
];


const tbody = $("#hospitals tbody");
hospitals.forEach(hospital => {
  const row = `
    <tr>
      <td data-label="الاسم">${hospital.name}</td>
      <td data-label="الموقع">${hospital.location}</td>
      <td data-label="رقم التواصل">${hospital.phone}</td>
      <td data-label="تفاصيل" class="details-cell">
        <span class="short">${hospital.details.split('،')[0]}</span>
        <span class="full">${hospital.details}</span>
        <button class="btn btn-link show-more">عرض المزيد</button>
      </td>
    </tr>
  `;
  tbody.append(row);
});



const schools = [
  { name: "مدرسة فلسطين الثانوية", location: "مدينة غزة", phone: "082830000", details: "مدرسة حكومية تقدم التعليم الثانوي بكافة التخصصات." },
  { name: "مدرسة الكرامة الأساسية", location: "جباليا", phone: "082830001", details: "تعليم أساسي للبنين والبنات مع أنشطة مدرسية متنوعة." },
  { name: "مدرسة الشجاعية الابتدائية", location: "الشجاعية", phone: "082830002", details: "تعليم ابتدائي مع برامج تعليمية مبتكرة." },
  { name: "مدرسة الفلاح الحديثة", location: "رفح", phone: "082830003", details: "تطبيق مناهج حديثة وأنشطة طلابية متقدمة." },
  { name: "مدرسة النور الأساسية", location: "خان يونس", phone: "082830004", details: "بيئة تعليمية آمنة وداعمة لجميع الطلاب." },
  { name: "مدرسة النجاح الثانوية", location: "بيت لاهيا", phone: "082830005", details: "تعليم ثانوي مع تركيز على الرياضيات والعلوم." },
  { name: "مدرسة الهلال الابتدائية", location: "جباليا", phone: "082830006", details: "برامج تعليمية شاملة للأطفال من جميع المراحل." },
  { name: "مدرسة الشفاء النموذجية", location: "مدينة غزة", phone: "082830007", details: "مدرسة نموذجية مع أنشطة ثقافية ورياضية." }
];

// مثال لإضافة هذه البيانات ديناميكيًا للجدول
const tbodySchools = $("#schools tbody");
schools.forEach(school => {
  const row = `
    <tr>
      <td data-label="الاسم">${school.name}</td>
      <td data-label="الموقع">${school.location}</td>
      <td data-label="رقم التواصل">${school.phone}</td>
      <td data-label="تفاصيل" class="details-cell">
        <span class="short">${school.details.split(' ')[0]}</span>
        <span class="full">${school.details}</span>
        <button class="btn btn-link show-more">عرض المزيد</button>
      </td>
    </tr>
  `;
  tbodySchools.append(row);
});



const govServices = [
  { name: "بلدية غزة", location: "مدينة غزة", phone: "082828000", details: "مياه، كهرباء، تنظيم، شكاوى." },
  { name: "وزارة الداخلية", location: "غزة", phone: "082828001", details: "هويات، معاملات مدنية." },
  { name: "مكتب الجوازات", location: "غزة", phone: "082828002", details: "إصدار وتجديد الجوازات." },
  { name: "وزارة الصحة", location: "غزة", phone: "082828003", details: "تنظيم القطاع الصحي." },
  { name: "وزارة التعليم", location: "غزة", phone: "082828004", details: "إدارة المدارس والتعليم." }
];

const tbodyGov = $("#gov tbody");
govServices.forEach(service => {
  const row = `
    <tr>
      <td data-label="الاسم">${service.name}</td>
      <td data-label="الموقع">${service.location}</td>
      <td data-label="رقم التواصل">${service.phone}</td>
      <td data-label="تفاصيل" class="details-cell">
        <span class="short">${service.details.split('،')[0]}</span>
        <span class="full">${service.details}</span>
        <button class="btn btn-link show-more">عرض المزيد</button>
      </td>
    </tr>
  `;
  tbodyGov.append(row);
});


// ================= Smooth Scroll عند الضغط على الأزرار =================
$('button[data-target]').click(function () {
  const target = $(this).data('target'); // الحصول على القسم المستهدف
  if ($(target).length) {
    $('html, body').animate({
      scrollTop: $(target).offset().top - 80 // خصم ارتفاع navbar الثابت
    }, 800); // مدة التمرير بالمللي ثانية
  }
});

// ================= عرض التفاصيل في الجداول =================
$('.show-more').click(function () {
  const cell = $(this).closest('.details-cell');
  cell.find('.short').toggle();
  cell.find('.full').slideToggle('slow');
  $(this).text($(this).text() === 'عرض المزيد' ? 'إخفاء' : 'عرض المزيد');
});

// ================= فلترة الجداول ديناميكياً =================
$('.filter-input').on('keyup', function () {
  const value = $(this).val().toLowerCase();
  $(this).closest('.section-table').find('tbody tr').filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});
