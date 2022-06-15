let column = gsap.utils.toArray('.grid-column');
let stuff = gsap.utils.toArray('.description');
let cls = gsap.utils.toArray('.close-description');
let title = gsap.utils.toArray('.title-movie');
let titleDes = gsap.utils.toArray('.title-description');
let paragraph = gsap.utils.toArray('.paragraph-movie');
let info = gsap.utils.toArray('.information-movie');

var intro = gsap.timeline();

if (matchMedia) {
   const mq = window.matchMedia('(min-width: 599px)');
   mq.addListener(WidthChange);
   WidthChange(mq);
}

// media query change
function WidthChange(mq) {
   if (mq.matches) {
      // window width is at least 599px

      $(window).on('load resize', function () {
         $('.main-grid').height($(this).height());
      });

      // var height = $(window).height();
      // $(".main-grid").css('height', height);

      intro
         .from(
            column,
            { yPercent: -40, duration: 2, stagger: 0.4, ease: 'power2.inOut' },
            0
         )
         .from($('.right'), { x: 400 }, 2)
         .from($('.left'), { x: -400 }, 2);

      $(column).click(function () {
         if ($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            var a = column.indexOf(this);
            function isHoverd(value, index, array) {
               if (index != a) {
                  return true;
               } else {
                  return false;
               }
            }
            var result = column.filter(isHoverd);
            var notstuff = stuff.filter(isHoverd);
            var notCls = cls.filter(isHoverd);
            var notTitle = title.filter(isHoverd);
            var notTitleDes = titleDes.filter(isHoverd);
            var notParagraph = paragraph.filter(isHoverd);
            var notInfo = info.filter(isHoverd);
            var scale = gsap.timeline();
            scale
               .to(column[a], {
                  flexGrow: 4,
                  duration: 0.1,
                  ease: 'power2.out',
               })
               .to(result, { flexGrow: 1, ease: 'power2.out' })
               .fromTo(cls[a], { opacity: 0 }, { x: -100, opacity: 1 }, 1)
               .to(notCls, { x: 0, opacity: 0 }, 1)
               .to($('.right'), { x: 400 }, 1)
               .to($('.left'), { x: -400 }, 1)
               .fromTo(
                  stuff[a],
                  { opacity: 0, width: '0px' },
                  { opacity: 1, width: '600px' },
                  1
               )
               .to(notstuff, { opacity: 0, width: '0px' }, 1)
               .fromTo(
                  title[a],
                  { opacity: 0, y: 200 },
                  { opacity: 1, y: 0 },
                  1.2
               )
               .to(notTitle, { opacity: 0, y: 200 }, 1.2)
               .fromTo(
                  titleDes[a],
                  { opacity: 0, y: 200 },
                  { opacity: 1, y: 0 },
                  1.3
               )
               .to(notTitleDes, { opacity: 0, y: 200 }, 1.3)
               .fromTo(
                  paragraph[a],
                  { opacity: 0, y: 200 },
                  { opacity: 1, y: 0 },
                  1.4
               )
               .to(notParagraph, { opacity: 0, y: 200 }, 1.4)
               .fromTo(
                  info[a],
                  { opacity: 0, y: 200 },
                  { opacity: 1, y: 0 },
                  1.5
               )
               .to(notInfo, { opacity: 0, y: 200 }, 1.5);
         } else {
            $(this).attr('data-click-state', 1);
            var a = column.indexOf(this);
            var scale = gsap.timeline();
            scale
               .to(cls[a], { x: 0, opacity: 0 }, 1)
               .to($('.right'), { x: 0 }, 1)
               .to($('.left'), { x: 0 }, 1)
               .to(title[a], { opacity: 0, y: 200 }, 1.2)
               .to(titleDes[a], { opacity: 0, y: 200 }, 1.2)
               .to(paragraph[a], { opacity: 0, y: 200 }, 1.3)
               .to(info[a], { opacity: 0, y: 200 }, 1.3)
               .to(stuff[a], { opacity: 0, width: '0px' }, 1.4)
               .to(column[a], { flexGrow: 1, ease: 'power2.out' }, 1.4);
         }
      });

      var hover = gsap.timeline();
      var num;

      $(column).hover(
         function () {
            num = column.indexOf(this);
            hover.to(column[num], { flexGrow: '2', duration: 0.1 });
         },
         function () {
            hover.to(column[num], { flexGrow: '1', duration: 0.1 });
         }
      );
   } else {
      intro
         .from(
            column,
            { xPercent: -100, duration: 2, stagger: 0.4, ease: 'power2.inOut' },
            0
         )
         .from($('.right'), { y: 400 }, 2)
         .from($('.left'), { y: -400 }, 2);

      $(column).click(function () {
         if ($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            var a = column.indexOf(this);
            function isHoverd(value, index, array) {
               if (index != a) {
                  return true;
               } else {
                  return false;
               }
            }
            var result = column.filter(isHoverd);
            var notstuff = stuff.filter(isHoverd);
            var notCls = cls.filter(isHoverd);
            var notTitle = title.filter(isHoverd);
            var notTitleDes = titleDes.filter(isHoverd);
            var notParagraph = paragraph.filter(isHoverd);
            var notInfo = info.filter(isHoverd);

            var scale = gsap.timeline();
            scale
               .to(column[a], { flexBasis: '400%', duration: 0.1 })
               .to(result, { flexBasis: '100%' })
               .fromTo(cls[a], { opacity: 0 }, { x: -100, opacity: 1 }, 1)
               .to(notCls, { x: 0, opacity: 0 }, 1)
               .to($('.right'), { y: 400 }, 1)
               .to($('.left'), { y: -400 }, 1)
               .fromTo(
                  stuff[a],
                  { opacity: 0, width: '0px' },
                  { opacity: 1, width: '200px' },
                  1
               )
               .to(notstuff, { opacity: 0, width: '0px' }, 1)
               .fromTo(
                  title[a],
                  { opacity: 0, y: 200 },
                  { opacity: 1, y: 0 },
                  1.2
               )
               .to(notTitle, { opacity: 0, y: 200 }, 1.2)
               .fromTo(
                  titleDes[a],
                  { opacity: 0, y: 200 },
                  { opacity: 1, y: 0 },
                  1.3
               )
               .to(notTitleDes, { opacity: 0, y: 200 }, 1.3)
               .fromTo(
                  paragraph[a],
                  { opacity: 0, y: 200 },
                  { opacity: 1, y: 0 },
                  1.4
               )
               .to(notParagraph, { opacity: 0, y: 200 }, 1.4)
               .fromTo(
                  info[a],
                  { opacity: 0, y: 200 },
                  { opacity: 1, y: 0 },
                  1.5
               )
               .to(notInfo, { opacity: 0, y: 200 }, 1.5);
         } else {
            $(this).attr('data-click-state', 1);
            var a = column.indexOf(this);
            var scale = gsap.timeline();
            scale
               .to(cls[a], { x: 0, opacity: 0 })
               .to($('.right'), { y: 0 }, 1)
               .to($('.left'), { y: 0 }, 1)
               .to(title[a], { opacity: 0, y: 200 }, 1.2)
               .to(titleDes[a], { opacity: 0, y: 200 }, 1.2)
               .to(paragraph[a], { opacity: 0, y: 200 }, 1.3)
               .to(info[a], { opacity: 0, y: 200 }, 1.3)
               .to(stuff[a], { opacity: 0, width: '0px' }, 1.4)
               .to(column[a], { flexBasis: '100%', ease: 'power2.out' }, 1.4);
         }
      });

      var hover = gsap.timeline();
      var num;

      $(column).hover(
         function () {
            num = column.indexOf(this);
            hover.to(column[num], { flexGrow: '2', duration: 0.1 });
         },
         function () {
            hover.to(column[num], { flexGrow: '1', duration: 0.1 });
         }
      );
   }
}
