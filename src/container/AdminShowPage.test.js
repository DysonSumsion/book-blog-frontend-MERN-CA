import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";
// // import FormAdd from './FormAdd'
import AdminShowPage from "./AdminShowPage";
import CardAdmin from '../components/CardAdmin'


describe("<AdminShowPage />", () => {
  const reviewList = [ 
    {
    title: "Three Litte Pigs",
    author: "Big Bad Wolf",
    _id: "5d19cd74a0c3e2c7f68ff800",
    url: "https://bookmarks-rag.s3.amazonaws.com/bookmarks-content.jpeg"
    },
    {
      title: "Go Blues",
      author: "Cheer Squad",
      _id: "5d19cd74a0c3e2c7f68ff801",
      url: "https://bookmarks-rag.s3.amazonaws.com/bookmarks-content.jpeg"
    },
    {
      title: "Tim Tams are Awesome",
      author: "Robert De Matteo",
      _id: "5d19cd74a0c3e2c7f68ff802",
      url: "https://bookmarks-rag.s3.amazonaws.com/bookmarks-content.jpeg"
    }
  ]



  it("displays loading when no review in list", () => {
    const review = [];
    const wrapper = shallow(
        <AdminShowPage data={review}  />
    );
    expect(wrapper).toMatchSnapshot();
    });

  it("renders CardAdmin component ", () => {
    const wrapper = shallow(
        <CardAdmin  />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders .cardLeft ", () => {
    const wrapper = shallow(
        <CardAdmin  />
    );
    expect(wrapper.find('.cardLeft')).toMatchSnapshot();
  });






  it("displays title in title field ", () => {

    const wrapper = render(
        <CardAdmin title={reviewList[0].title} renderReviews={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
    });

  it("displays author in author field ", () => {
    const wrapper = mount(
        <CardAdmin author={reviewList[0].author} renderReviews={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
    });




});


