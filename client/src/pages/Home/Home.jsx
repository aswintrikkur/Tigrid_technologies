import React from "react";
import "./Home.scss";
import { Container } from "../../components/shared/Container/Container";
import { SearchComponent } from "../../components/Home/SearchComponent/SearchComponent";
import { PrimaryButton } from "../../components/shared/Button/Button";
import { Card3, LocationCard, PrimaryCard, ReviewCard, SecondaryCard } from "../../components/shared/Card/Card";
import { ContentComponent } from "../../components/Home/ContentComponent/ContentComponent";
import { ContactComponent } from "../../components/Home/ContactComponent/ContactComponent";

export const Home = () => {
	return (
		<div className="home-container">
			<Container>
				{/* ----------------- section1 -------------------- */}
				<section className="section1">
					<div className="banner-container">
						<img src="/images/banner 1.png" alt="banner" />

						<div className="title-container">
							<h1>
								Lorem Ipsum 
								<br /> is simply dummy
								<br /> text of the printing
							</h1>
							<h4>Lorem Ipsum is simply dummy text </h4>
						</div>
					</div>
				</section>
				<div className="searchComponent">
					<SearchComponent />
				</div>

				{/* ----------------- section2 ------------------ */}
				<section className="section2">
					<div className="images-container">
						<div className="col1">
							<img src="/images/image1.png" alt="" />
						</div>
						<div className="col2">
							<img src="/images/image2.png" alt="" />
							<img src="/images/image3.png" alt="" />
						</div>
					</div>
					<div className="desc-container">
						<ContentComponent>
							<h5>Lorem Ipsum</h5>
							<h2>Lorem Ipsum is simply dummy</h2>

							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
								been the industry's standard dummy text ever since the 1500s, when an unknown printer took
								a galley of type and scrambled it to make a type specimen book. It has survived not only
								five centuries, but also the leap into electronic typesetting, remaining essentially
								unchanged.
							</p>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
								been the industry's standard dummy text ever since the 1500s, when an unknown printer took
								a galley of type and scrambled it to make a type specimen book. It has survived not only
								five centuries, but also the leap into electronic typesetting, remaining essentially
								unchanged.
							</p>
							<PrimaryButton text="Read More" />
						</ContentComponent>
					</div>
				</section>

				{/* ------------------- section3 ---------------- */}
				<section className="section3">
					<ContentComponent>
						<h5>Lorem Ipsum</h5>
						<h2>Lorem Ipsum is simply dummy</h2>
						<h6>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled
						</h6>
					</ContentComponent>

					<div className="facilities">
						<div className="row">
							<PrimaryCard src="/icons/icon1.png" />
							<PrimaryCard src="/icons/icon2.png" />
							<PrimaryCard src="/icons/icon3.png" />
						</div>
						<div className="row">
							<PrimaryCard src="/icons/icon4.png" />
							<PrimaryCard src="/icons/icon5.png" />
							<PrimaryCard src="/icons/icon6.png" />
						</div>
					</div>
				</section>

				{/* ------------------	section4 ------------------- */}
				<section className="section4">
					<ContentComponent>
						<h5>Lorem Ipsum</h5>
						<h2>Lorem Ipsum is simply dummy</h2>
						<h6>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled
						</h6>
					</ContentComponent>

					<div className="image-container">
						<div className="left">
							<img src="/images/image4.png" alt="image4" />
							<div className="content">
								<h2>
									Up to <br /> <span>50%</span> Off <br /> <span>GEORGIA PACKAGES</span>
								</h2>
								<PrimaryButton text="Book Now" />
							</div>
						</div>
						<div className="right">
							<div className="co1">
								<img src="/images/image5.png" alt="image5" />
								<img src="/images/image6.png" alt="image6" />
								<img src="/images/image7.png" alt="image7" />
							</div>
							<div className="co2">
								<img src="/images/image8.png" alt="image8" />
								<img src="/images/image9.png" alt="image9" />
								<img src="/images/image10.png" alt="image10" />
							</div>
							<div className="co3">
								<img src="/images/image11.png" alt="image11" />
								<img src="/images/image12.png" alt="image12" />
								<PrimaryButton text="View All" width="100%" />
							</div>
						</div>
					</div>
				</section>

				{/* ------------------	section5 ------------------- */}
				<section className="section5">
					<div className="row1">
						<div className="img-container">
							<img src="/icons/icon7.png" alt="icon7" />
						</div>
						<div className="img-container">
							<img src="/icons/icon8.png" alt="icon8" />
						</div>
						<div className="img-container">
							<img src="/icons/icon9.png" alt="icon9" />
						</div>
						<div className="img-container">
							<img src="/icons/icon10.png" alt="icon10" />
						</div>
					</div>

					<hr />

					<div className="row2">
						<div className="content">
							<h1>60+</h1>
							<p>Lorem Ipsum</p>
						</div>
						<div className="content">
							<h1>85+</h1>
							<p>Lorem Ipsum</p>
						</div>
						<div className="content">
							<h1>120+</h1>
							<p>Lorem Ipsum</p>
						</div>
						<div className="content">
							<h1>80+</h1>
							<p>Lorem Ipsum</p>
						</div>
					</div>

					<hr />
				</section>

				{/* -------------------- section6 / LOCATIONS ---------------- */}
				<section className="section6">
					<ContentComponent>
						<h5>Lorem Ipsum</h5>
						<h2>Lorem Ipsum is simply dummy</h2>
						<h6>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived
						</h6>
					</ContentComponent>

					<div className="card-container">
						<SecondaryCard src="/images/image14.png" />
						<SecondaryCard src="/images/image15.png" rating="4.3" price="2000" />
						<SecondaryCard src="/images/image16.png" rating="4.9" price="3454" />
						<SecondaryCard src="/images/image17.png" rating="4.2" />
						<SecondaryCard src="/images/image18.png" />
					</div>
				</section>

				{/* ----------------------- section7 -------------------- */}
				<section className="section7">
					<div className="left">
						<ContentComponent colorWhite>
							<h5>Lorem Ipsum</h5>
							<h2>Lorem Ipsum is simply dummy</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
								been the industry's standard dummy text ever since the 1500s, when an unknown printer took
								a galley of type and scrambled it to make a type specimen book. It has survived not only
								five centuries, but also the leap into electronic typesetting, remaining essentially
								unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
								Lorem Ipsum passages,
							</p>{" "}
							<br /> <br />
							<PrimaryButton text="View All" />
						</ContentComponent>
					</div>
					<div className="right">
						<div className="col1">
							<Card3 src="/icons/icon11.png" />
							<Card3 src="/icons/icon12.png" />
						</div>
						<div className="col2">
							<Card3 src="/icons/icon13.png" />
							<Card3 src="/icons/icon14.png" />
						</div>
					</div>
				</section>

				{/* ----------------section8 / REVIEWS -------------- */}
				<section className="section8">
					<ContentComponent>
						<h5>Lorem Ipsum</h5>
						<h2>Lorem Ipsum is simply dummy</h2>
						<h6>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							galley of type and scrambled
						</h6>
					</ContentComponent>
					<div className="card-container">
						<ReviewCard src="/images/profile1.png" />
						<ReviewCard src="/images/profile2.png" />
						<ReviewCard src="/images/profile3.png" />
					</div>
				</section>

				{/* ------------ section9 ------------------- */}
				<section className="section9">
					<div className="left"></div>
					<div className="right">
						<ContentComponent>
							<h5>Lorem Ipsum</h5>
							<h2>Lorem Ipsum is simply dummy</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
								been the industry's standard dummy text ever since the 1500s, when an unknown printer took
								a galley of type and scrambled it to make a type specimen book. It has survived not only
								five centuries, but also the leap into electronic typesetting, remaining essentially
								unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
								Lorem Ipsum passages,
							</p>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
								been the industry's standard dummy text ever since the 1500s, when an unknown printer took
								a galley of type and scrambled it to make a type specimen book. It has survived not only
								five centuries, but also the leap into electronic typesetting, remaining essentially
								unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
								Lorem Ipsum passages
							</p>
						</ContentComponent>
					</div>
				</section>

				{/* -------------- section10 --------------- */}
				<section className="section10">
					<ContentComponent>
						<h5>Lorem Ipsum</h5>
						<h2>Lorem Ipsum is simply dummy</h2>
						<h6>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's
						</h6>
					</ContentComponent>

					<div className="location-container">
						<div className="left">
							<LocationCard src="/images/location1.png" />
							<LocationCard src="/images/location2.png" />
							<LocationCard src="/images/location3.png" />
							<LocationCard src="/images/location4.png" />
						</div>
						<div className="right">
							<img src="/images/location5.png" alt="" />
							<h4>Lorem Ipsum is simply dummy</h4>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
								been the industry's standard dummy text ever since the 1500s, when an unknown printer took
								a galley of type and scrambled it to make a type specimen book
							</p>
							<PrimaryButton text="Read More" width="171px" />
						</div>
					</div>
				</section>

				<div className="contact-component">
					<ContactComponent />
				</div>
			</Container>
		</div>
	);
};
