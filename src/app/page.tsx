import EditorsPics from "@/components/editors-pics";
import FeatureProducts from "@/components/feature-products";
import FeauresPosts from "@/components/feaures-posts";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
     <EditorsPics />
    <FeatureProducts />
    <FeauresPosts /> 
    <Footer />
    </>
  );
}
