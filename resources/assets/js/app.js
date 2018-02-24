import "core-js/fn/object/assign";
import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helper';
import ImageCarousel from '../components/ImageCarousel';
import ModalWindow from '../components/ModalWindow';
import HeaderImage from '../components/HeaderImage';
import FeatureList from '../components/FeatureList';
import ExpandableText from '../components/ExpandableText';
let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

var app = new Vue(
    {
        el:'#app',
        data:Object.assign(
            model, {
            }
        ),
        components:{ HeaderImage, ModalWindow, ImageCarousel, FeatureList, ExpandableText },
        methods:{
            openModal(){
                this.$refs.imagemodal.modalOpen = true;
            }
        }
    });

