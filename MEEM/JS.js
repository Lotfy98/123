const join = document.querySelector("#planJoin");
const accept = document.querySelector("#planAcceptance");
const train = document.querySelector("#planTraining");
const feasibility = document.querySelector("#planFeasibility");
const consultant = document.querySelector("#planConsultant");
const fund = document.querySelector("#planFunding");
const dev = document.querySelector("#planDevelopment");
const exp = document.querySelector("#planExport");
const count = document.querySelector("#counter");
const description = document.querySelector("#desc");


join.addEventListener("click", joinFunction);
function joinFunction() {
    count.innerHTML="01";
    description.innerHTML="في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة";
};


accept.addEventListener("click", acceptFunction);
function acceptFunction() {
    count.innerHTML="02";
    description.innerHTML="في هذه المرحلة يتم قبول المشاركين بناء على الضوابط والشروط المذكورة";
};

train.addEventListener("click", trainFunction);
function trainFunction() {
    count.innerHTML="03";
    description.innerHTML="في هذه المرحلة يتم تقديم برامج تدريبية و تأهيلية للمشاركين بموجب سبعة حقائب تطويرية لتنمية المهارات المعرفية لدى المشاركين";
};

feasibility.addEventListener("click", feasFunction);
function feasFunction() {
    count.innerHTML="04";
    description.innerHTML="في هذه المرحلة يقدم محتوى تدريبي إلكتروني تفاعلي لكيفية إعداد دراسة الجدوى للمشاركين";
};

consultant.addEventListener("click", conFunction);
function conFunction() {
    count.innerHTML="05";
    description.innerHTML="في هذه المرحلة يتم إستقطاب متخصصين لمساندة المشاريع وتمكينها من تحقيق النمو والتوسع وزيادة مبيعات المشاركين السنوية ومتابعتها";
};

fund.addEventListener("click", fundFunction);
function fundFunction() {
    count.innerHTML="06";
    description.innerHTML="في هذه المرحلة يتم تقديم منتج تمويلي بالإضافة لمتابعة كافة الأعمال بحيث توجيههم بكيفية الصرف";
};

dev.addEventListener("click", devFunction);
function devFunction() {
    count.innerHTML="07";
    description.innerHTML="في هذه المرحلة يتم تمكين وتطوير مشاريع المشاركين من خلال مختصين في تطوير الأعمال وتنمية المبيعات";
};

exp.addEventListener("click", expFunction);
function expFunction() {
    count.innerHTML="08";
    description.innerHTML="في هذه المرحلة يتم دعم مشاريع المشاركين من خلال ربطهم بجهات تصدير ومنافذ بيع دولية و تصدير مشاريعهم كقصص نجاح لبرنامج تجسير";
};

document.querySelectorAll('.plans').forEach(one => {
    one.addEventListener('click', function (y) {
      y.preventDefault();
        let old =document.querySelector('.highlight');
        if (old) {
          old.classList.remove('highlight');
        }
      event.currentTarget.classList.add('highlight');
    });
  });