$('.slider').slick({
    autoplay:false,
    autoplaySpeed:3000,
    dots:false,
    infinite: true, // スライドのループを有効にするか
    slidesToScroll: 1, // スクロールするスライド数を設定
    slidesToShow: 4, // 表示するスライド数を設定 
    responsive:[
        {
            breakpoint: 767, // 767px以下のサイズに適用
            settings: {
            slidesToShow: 1,
            },
        },
    ],
    respondTo: 'slider'
});