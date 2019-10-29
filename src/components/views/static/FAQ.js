import React from "react";
import { Accordion } from "semantic-ui-react";

const buyerFaq = [
  {
    key: "What kind of art do you deal in?",
    title: "What kind of art do you deal in?",
    content: [
      "LamaArt is a truly global platform. As of now for our initial offering, we have curated the best Indian and Japanese Art from the most reputed and established artists who specialize in varied styles and art forms. Within the browse page(link), you can view the various styles available."
    ].join(" ")
  },
  {
    key: "How can we be assured that the artwork is original?",
    title: "How can we be assured that the artwork is original?",
    content: [
      "LamaArt is a platform which acts as a Market Place, connecting customers to artists. In order to ensure, the artwork is authentic/original, LamaArt mandates all artists to provide a certificate (can be physical or e-certificate) of authenticity along with the Artwork."
    ].join(" ")
  },
  {
    key: "Where are you based?",
    title: "Where are you based?",
    content: [
      "LamaArt is a London-based company with a registered office in South Kensington. But we have a Global platform and work with artists and customers from across the Globe."
    ].join(" ")
  },
  {
    key: "What if I want to see the painting physically before purchasing?",
    title: "What if I want to see the painting physically before purchasing?",
    content: [
      "LamaArt is an online-only platform. We ensure that the artists provide high-quality images of the artworks and that they are representative of the original. Because we work with International Artists, it is not always possible to allow for the physical inspection of the art-work. However, based upon the need, we can look at offering this facility on a case-by-case basis. This would however incur additional costs, which the customer would be required to pay for."
    ].join(" ")
  },
  {
    key: "How do I order?",
    title: "How do I order?",
    content: [
      "To select the artwork you like, click the Heart Button to add to your wish-list > Confirm your order by going into the wishlist page and following the instructions"
    ].join(" ")
  },
  {
    key: "What purchase scheme options do you provide?",
    title: "What purchase scheme options do you provide?",
    content: [
      "LamaArt, allows for artworks to be both bought and rented, at the discretion of the artist. Each artwork would have the purchase options and the cost at which you can buy or rent, mentioned."
    ].join(" ")
  },
  {
    key:
      "What are the next steps once an order has been submitted for enquiry?",
    title:
      "What are the next steps once an order has been submitted for enquiry?",
    content: [
      "Once an order has been submitted for enquiry, the lamaArt team will review the request and follow up with the next steps"
    ].join(" ")
  },
  {
    key: "For how long can I rent an artwork?",
    title: "For how long can I rent an artwork?",
    content: [
      "LamaArt provides various options to cater to different needs. Because we are dealing with International artists, our lowest rental duration is 12 months. The rental periods are- 1 year, 2 years or 3 years."
    ].join(" ")
  },
  {
    key: "For how long can I rent an artwork?",
    title: "For how long can I rent an artwork?",
    content: [
      "LamaArt ensures that the customers get the best value for the artwork. LamaArt charges the customer 6% of the cost of the painting for the 1st Year and for each consecutive year, the Percentage charged reduces by 1% of the cost of the painting. So, for the second year, LamaArt charges 5% of the cost of the painting and for the third, 4% of the cost of the painting. These rates have been chosen based on extensive market research, competitor analysis, customer study of spending capability and accounting for extra charges incurred by LamaArt Ltd. in order to be competitive in the market and build a sustainable business."
    ].join(" ")
  },
  {
    key: "Are there any additional charges charged by LamaArt?",
    title: "Are there any additional charges charged by LamaArt?",
    content: [
      "Lama Art only earns money through commissions charged on the rental and sale of artwork. LamaArt doesn’t have any hidden charges. The cost of framing and installation and de-framing of artwork is separate and in addition to the cost of the artworks to cover for the costs of third-party installers and framers we liaise with."
    ].join(" ")
  },
  {
    key: "Do I need an Insurance to rent art?",
    title: "Do I need an Insurance to rent art?",
    content: [
      "Yes. Once you rent the art, and the art is on your premises, you would be liable to pay for the damages to the artwork. For the same, it is mandatory, that you have an insurance. In most situations, this would already be covered by the building insurance you already have in place. However, it is up to you to ensure that you have checked it is enough else request you to increase the insurance amount to cover for the artwork."
    ].join(" ")
  },
  {
    key: "What are my payment options?",
    title: "What are my payment options?",
    content: [
      "Once the deal is agreed, we will initiate the payment process. Payment would be made in form of a Bank Transfer."
    ].join(" ")
  },
  {
    key: "What happens once the rental is over?",
    title: "What happens once the rental is over?",
    content: [
      "Two months before the rental is over, subject to approval by artist, you will be asked whether you want to extend the contract, buy the artwork or return it. In case of extension, you may be charged a different price based on what the artist quotes. In case you decide to return the artwork, on the day the rental ends, we will arrange for the artwork to be collected. You may be charged for de-framing and un-installation. On retrieval of the artwork, it would be inspected for damages. If there are damages, the required deductions would be made, and the deposit returned. In case, the damages are more severe, you might be requested to cover the damages or buy the artwork, whichever is cheaper. In case, you decide to buy the artwork, 50% of the amount you have paid so far in rents, would contribute to the cost of the artwork. You would only be required to pay the deficit, i.e. cost of the artwork – 50% of the amount you have paid in rent."
    ].join(" ")
  },
  {
    key: "Do you frame and install the artwork?",
    title: "Do you frame and install the artwork?",
    content: [
      "Yes, we liaise with professional framing and installation services, however, as mentioned before, there is a cost for these, in addition to the amount you pay for the artwork."
    ].join(" ")
  },
  {
    key: "Do you deliver internationally?",
    title: "Do you deliver internationally?",
    content: [
      "Yes, we deliver artworks internationally. However, we only offer framing and installation options at this stage for clients in the UK."
    ].join(" ")
  },
  {
    key: "How much time does it take to deliver?",
    title: "How much time does it take to deliver?",
    content: [
      "Depending on your location, we have a turn-around time of 10-15 days for only delivery of artworks and 15-20 days for artworks to be delivered to your location, in case you require framing and installation options"
    ].join(" ")
  },
  {
    key:
      "What if the artwork gets damaged while shipping, framing or installation?",
    title:
      "What if the artwork gets damaged while shipping, framing or installation?",
    content: [
      "Utmost care is taken during delivery. However, in unforeseen circumstances of damages during shipping, the cost will be covered by the Logistics Partners.  Similarly, if the artwork is damaged during framing and installation, the cost will be covered by our framers and installation partners."
    ].join(" ")
  },
  {
    key: "What is your policy on Cancellations?",
    title: "What is your policy on  Cancellations?",
    content: [
      "LamaArt accepts cancellations if the artwork has not been shipped. In these circumstances, there are no charges. If the order is cancelled, before the artwork has been shipped, there are no charges for cancellation. In case, the order has been shipped, we would be charging shipping charges for returning the artwork cancellation in these circumstances, which will be removed from your deposit and the rest of your money returned. If you have asked for the artworks to be framed and installed and the artworks are in that stage of the product lifecycle, there will be no cancellations."
    ].join(" ")
  },
  {
    key: "What is your policy on Returns and refunds?",
    title: "What is your policy on Returns and refunds?",
    content: [
      "LamaArt has a 14-day return policy from the moment you receive the artwork. Once you inform us, we will arrange for our delivery partners to retrieve the artwork. We request you to follow the packaging standards for the return process. In case, there was framing involved, the charges for un-framing the artwork may also be charged. In case of rentals, costs for un-installing the artworks may also be charged. Once the artwork is returned to the artist, it would be inspected for damages and the refund would be processed accordingly within a period of 14-days from the receipt."
    ].join(" ")
  },
  {
    key: "Profile page?",
    title: "Profile page?",
    content: [
      "Sign-up and profile management features would be rolled-out in the second phase of development. This would greatly improve the capability to manage your favorites, view trends and check-out from the platform itself. "
    ].join(" ")
  }
];

const artistFaq = [
  {
    key: "what-is-lama",
    title: "What is a lama?",
    content: ["A lama is a type of "].join(" ")
  },
  {
    key: "kinds-of-lamas",
    title: "What kinds of lamas are there?",
    content: ["There are many breeds of lamas."].join(" ")
  },
  {
    key: "acquire-lama",
    title: "How do you acquire a lama?",
    content: ["There are many breeds of lamas."].join(" ")
  }
];

class FAQ extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui container grid-holder">
          <h1 className="header-title">FAQs</h1>
          <h2 className="header-title" style={{ textAlign: "left!important" }}>
            Artists FAQs
          </h2>
          <Accordion defaultActiveIndex={0} panels={artistFaq} />
          <h2 className="header-title" style={{ textAlign: "left!important" }}>
            Buyer FAQs
          </h2>
          <Accordion defaultActiveIndex={0} panels={buyerFaq} />
        </div>
      </div>
    );
  }
}

export default FAQ;