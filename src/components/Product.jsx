import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const goToPage = (number) => {
    //console.log(e.currentTarget.dataset.page);
    navigate(`/products/${number}`);
  };

  return (
    <main>
      <div className="row  mb-3 text-center my-5">
        <div className="col ">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                Router: {productId}
              </h1>
              Product Information
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col-12 my-1">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => goToPage(900)}
                  data-page="/products/900"
                >
                  Go to Product 900
                </button>
              </div>
              <div className="col-12 my-1">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => goToPage(800)}
                  data-page="/products/800"
                >
                  Go to Product 800
                </button>
              </div>
              <div className="col-12 my-1">
                {" "}
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => goToPage(100)}
                  data-page="/products/100"
                >
                  Go to Product 100
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
