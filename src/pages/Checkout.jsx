import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  // variables
  let total = 0;
  // getting the data
  const items = useSelector((state) => state.addItems);

  return (
    <>
      <div className="container">
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">{items.length}</span>
            </h4>
            <ul class="list-group mb-3">
              {items.map((item) => {
                total = total + item.price;
                return (
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{item.title}</h6>
                    </div>
                    <span className="text-muted">${item.price}</span>
                  </li>
                );
              })}

              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total}</strong>
              </li>
            </ul>

            <form class="card p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" class="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label htmlFor="firstName" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label htmlFor="lastName" class="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="username" class="form-label">
                    Username
                  </label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="email" class="form-label">
                    Email <span class="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="address" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="address2" class="form-label">
                    Address 2 <span class="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div class="col-md-5">
                  <label htmlFor="country" class="form-label">
                    Country
                  </label>
                  <select class="form-select" id="country" required="">
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div class="col-md-4">
                  <label htmlFor="state" class="form-label">
                    State
                  </label>
                  <select class="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div class="col-md-3">
                  <label htmlFor="zip" class="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr class="my-4" />

              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="same-address"
                />
                <label class="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="save-info"
                />
                <label class="form-check-label" htmlFor="save-info">
                  Save this information htmlFor next time
                </label>
              </div>

              <hr class="my-4" />

              <h4 class="mb-3">Payment</h4>

              <div class="my-3">
                <div class="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    checked=""
                    required=""
                  />
                  <label class="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    required=""
                  />
                  <label class="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    required=""
                  />
                  <label class="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div class="row gy-3">
                <div class="col-md-6">
                  <label htmlFor="cc-name" class="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small class="text-muted">
                    Full name as displayed on card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>

                <div class="col-md-6">
                  <label htmlFor="cc-number" class="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div class="col-md-3">
                  <label htmlFor="cc-expiration" class="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>

                <div class="col-md-3">
                  <label htmlFor="cc-cvv" class="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
