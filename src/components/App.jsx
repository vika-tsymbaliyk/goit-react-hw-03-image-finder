import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchPhotoByQ, itemsPerPage } from "./api";
import { Layout } from "./Layout";
import { Loader } from "./Loader/Loader";
import { isVisible } from "@testing-library/user-event/dist/utils";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
    isVisible: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) { this.fetchPhoto(this.state.query, this.state.page) }
    
  }

  fetchPhoto = async(query, page)=>{
    try {
      this.setState({ loading: true, error: false });
      const {totalHits, hits} = await fetchPhotoByQ(query, page);
      this.setState(prevState => 
        ({images: [...prevState.images, ...hits],
        }));
      console.log(Math.ceil(totalHits/itemsPerPage));
      if(Math.ceil(totalHits/itemsPerPage)){
      this.setState({
        isVisible:true,})
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSubmit = async(evt) => {
    evt.preventDefault();
    const serchWord = evt.target.elements.query.value;
    this.setState({
      query: serchWord ,
      images: [],
      page: 1,
    });
  };
  
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));    
  };

  render() {
    console.log(this.state.images);
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit}/>
        {this.state.loading && <Loader/>}
        {this.state.images.length > 0 &&  <ImageGallery images={this.state.images}/>}
        {this.isVisible &&  <Button onClick={this.handleLoadMore}/>}
        
        </Layout>
  


    );
  }
}