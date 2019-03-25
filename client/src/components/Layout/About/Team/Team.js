import React from "react";

import "./Team.css";

const team = () => {
  return (
    <div>
      <section id="team" class="pb-5" id="teamdiv">
        <div class="container">
          <h5 class="section-title h1">OUR TEAM</h5>
          <div class="row justify-content-around">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div
                class="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="mainflip">
                  <div class="frontside">
                    <div class="card">
                      <div class="card-body text-center">
                        <p>
                          <img
                            class=" img-fluid"
                            src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                            alt="user-profile"
                          />
                        </p>
                        <h4 class="card-title">Sunlimetech</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.
                        </p>
                        <a href="/" class="btn btn-primary btn-sm">
                          <i class="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="backside">
                    <div class="card">
                      <div class="card-body text-center mt-4">
                        <h4 class="card-title">Sunlimetech</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.This is basic card with image
                          on top, title, description and button.This is basic
                          card with image on top, title, description and button.
                        </p>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i class="fa fa-facebook" />
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i class="fa fa-twitter" />
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i class="fa fa-skype" />
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i class="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
              <div
                class="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div class="mainflip">
                  <div class="frontside">
                    <div class="card">
                      <div class="card-body text-center">
                        <p>
                          <img
                            class=" img-fluid"
                            src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"
                            alt="user-profile"
                          />
                        </p>
                        <h4 class="card-title">Sunlimetech</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.
                        </p>
                        <a href="/" class="btn btn-primary btn-sm">
                          <i class="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="backside">
                    <div class="card">
                      <div class="card-body text-center mt-4">
                        <h4 class="card-title">Sunlimetech</h4>
                        <p class="card-text">
                          This is basic card with image on top, title,
                          description and button.This is basic card with image
                          on top, title, description and button.This is basic
                          card with image on top, title, description and button.
                        </p>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i class="fa fa-facebook" />
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i class="fa fa-twitter" />
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i class="fa fa-skype" />
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              class="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i class="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default team;
