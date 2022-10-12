export const vuescrollConfig = {
    vuescroll: {
        mode: 'native',
        sizeStrategy: 'percent',
        detectResize: true
    },
    scrollPanel: {
        initialScrollY: false,
        initialScrollX: false,
        scrollingX: false,
        scrollingY: true,
        speed: 300,
        easing: 'easeInOutCubic',
        padding: true,
        verticalNativeBarPos: 'right'
    },
    rail: {
        background: '#000000',
        opacity: 0,
        size: '8px',
        specifyBorderRadius: false,
        gutterOfEnds: '2px',
        gutterOfSide: '2px',
        keepShow: false
    },
    bar: {
        showDelay: 500,
        onlyShowBarOnScroll: true,
        keepShow: false,
        background: '#000000',
        opacity: 0.6,
        size: '8px',
        hoverStyle: false
    }
}

export default vuescrollConfig
