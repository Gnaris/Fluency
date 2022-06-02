import React, { FunctionComponent } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, A11y, Scrollbar } from 'swiper';
import 'swiper/css/pagination';
import ProductCard from '../atomes/ProductCard';

type Props = {
    title : string,
    products : {id : number, img : string, name : string, brand: string, price : number}[]
}

const ProductCarrousel : FunctionComponent<Props> = ({title, products}) => {
    return (
        <div className='swiper2'>
            <div className={"swiper2-container"}>
                <h2 className='swiper2-title'>{title}</h2>
                <Swiper modules={[Pagination]} spaceBetween={40} slidesPerView={4} loop={true} pagination={{ clickable: true }} className={"swiper2-slide"} autoplay={true} delay={2000}>
                {
                    products.map((product, index) => 
                        <SwiperSlide key={index} className={"swiper2-product"} style={{width : "500px"}}>
                            <ProductCard id={product.id} img={product.img} name={product.name} brand={product.brand} price={product.price} />
                        </SwiperSlide>
                    )
                }
                </Swiper>
            </div>
        </div>
    );
};

export default ProductCarrousel;