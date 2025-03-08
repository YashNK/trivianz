import HTMLFlipBook from "react-pageflip";
import page1 from "../../assets/images/page1.jpg";
import page2 from "../../assets/images/page2.jpg";
import page3 from "../../assets/images/page3.jpg";
import page4 from "../../assets/images/page4.jpg";
import page5 from "../../assets/images/page5.jpg";
import page6 from "../../assets/images/page6.jpg";
import page7 from "../../assets/images/page7.jpg";
import page8 from "../../assets/images/page8.jpg";
import page9 from "../../assets/images/page9.jpg";
import page10 from "../../assets/images/page10.jpg";
import page11 from "../../assets/images/page11.jpg";
import page12 from "../../assets/images/page12.jpg";
import page13 from "../../assets/images/page13.jpg";
import page14 from "../../assets/images/page14.jpg";
import page15 from "../../assets/images/page15.jpg";
import page16 from "../../assets/images/page16.jpg";
import page17 from "../../assets/images/page17.jpg";
import page18 from "../../assets/images/page18.jpg";
import page19 from "../../assets/images/page19.jpg";
import page20 from "../../assets/images/page20.jpg";
import "./flip-book.scss";
import { Header } from "../../components/header";

const FlipBook: React.FunctionComponent = () => {
  return (
    <div className="flip_book_container d-flex flex-column justify-content-center align-items-center h-100 bg-gray-100">
      <div className="w-100">
        <Header />
      </div>
      <HTMLFlipBook
        width={300}
        height={400}
        minWidth={250}
        minHeight={350}
        maxWidth={600}
        maxHeight={800}
        size="stretch"
        startPage={0}
        style={{ border: "1px solid #ddd" }}
        className="shadow-lg"
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={1}
        autoSize={true}
        clickEventForward={true}
        showPageCorners={true}
        disableFlipByClick={false}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        useMouseEvents={true}
        swipeDistance={30}
      >
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page1} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page2} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page3} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page4} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page5} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page6} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page7} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page8} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page9} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page10} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page11} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page12} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page13} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page14} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page15} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page16} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page17} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page18} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page19} />
        </div>
        <div className="flip_book_page w-full h-full">
          <img className="flip_book_image" src={page20} />
        </div>
      </HTMLFlipBook>
      <div></div>
    </div>
  );
};

export default FlipBook;
