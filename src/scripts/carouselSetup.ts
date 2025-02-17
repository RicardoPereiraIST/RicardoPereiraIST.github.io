import 'swiper/css';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

export function setupCarousel() {
    document.addEventListener('DOMContentLoaded', function() {
        const parentSwiper = new Swiper(".parent-slider", {
            loop: true,
            autoplay: {
                delay: 30000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination-parent',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-parent',
                prevEl: '.swiper-button-prev-parent',
            },
        });

        const childSwipers = new Swiper(".child-slider", {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination-child',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-child',
                prevEl: '.swiper-button-prev-child',
            },
            nested: true
        });

        const allSwipers = [parentSwiper, ...(Array.isArray(childSwipers) ? childSwipers : [childSwipers])];
        const videos = document.querySelectorAll('.swiper-slide video');

        videos.forEach(video => {
            video.addEventListener('play', function() {
                allSwipers.forEach(swiper => {
                    swiper.autoplay.stop();
                });
            });

            video.addEventListener('ended', function() {
                allSwipers.forEach(swiper => {
                    swiper.autoplay.start();
                });
            });

            video.addEventListener('pause', function() {
                allSwipers.forEach(swiper => {
                    swiper.autoplay.start();
                });
            });
        });

        function pauseVideo() {
            document.querySelectorAll('.child-slider').forEach((childSlider) => {
                const activeSlide = childSlider.querySelector('.swiper-slide-active');
                const video = activeSlide?.querySelector('video');
                video?.pause();
            });
        }

        allSwipers.forEach(swiper => {
            swiper.on('slideChange', pauseVideo);
            swiper.on('touchEnd', pauseVideo);
            swiper.on('navigationNext', pauseVideo);
            swiper.on('navigationPrev', pauseVideo);
        });
    });
}