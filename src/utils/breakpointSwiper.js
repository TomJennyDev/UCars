export default function calBreakPointSwiper(breakpoint, params) {
  const paramsObj = { ...params };
  return Object.values(breakpoint).reduce((acc, curr, idx) => {
    const slidesPerView = curr >= breakpoint.lg ? 3 : 1;
    paramsObj.slidesPerView = slidesPerView;
    acc[curr] = { ...paramsObj };
    return acc;
  }, {});
}
