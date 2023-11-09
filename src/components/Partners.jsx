import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { Box, Heading } from "@chakra-ui/react";

export default function Partners() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (
        <Box my="20px">
            <Heading my="20px" textAlign="center" as="h2">No partenaires...</Heading>
            <Slider {...settings}  >
                <Box >
                    <img style={{ width: "200px", }} src="https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="the forest" />
                </Box>
                <Box >
                    <img style={{ width: "200px", margin: "auto" }} src="https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="the forest" />
                </Box>
                <Box >
                    <img style={{ width: "200px", margin: "auto" }} src="https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="the forest" />
                </Box>
                {/* <Box >
                    <img style={{ width: "200px", }} src="https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="the forest" />
                </Box>
                <Box >
                    <img style={{ width: "200px", margin: "auto" }} src="https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="the forest" />
                </Box>
                <Box >
                    <img style={{ width: "200px", margin: "auto" }} src="https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="the forest" />
                </Box> */}

            </Slider>
        </Box>
    );
}
