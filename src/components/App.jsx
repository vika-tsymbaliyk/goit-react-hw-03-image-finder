import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchPhotoByQ } from "./api";
import { Layout } from "./Layout";
import { Loader } from "./Loader/Loader";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
  };

  handleSubmit = async(evt) => {
    evt.preventDefault();
   
    const serchWord = evt.target.elements.query.value;
    this.setState({
      query: serchWord ,
      images: [],
      page: 1,
    });
    try {
      this.setState({ loading: true, error: false });

      const imagesArray = await fetchPhotoByQ(serchWord , this.state.page);

      this.setState({ 
        images: imagesArray,
      });
      
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
    
  };
  
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));    

  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true, error: false });
  
        const imagesArray = fetchPhotoByQ(this.state.query, this.state.page);
  
        this.setState({ 
          images: imagesArray,
        });
        
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
    
  }

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit}/>
        {this.state.loading && <Loader/>}
        {this.state.images.length > 0 &&  <ImageGallery images={this.state.images}/>}
        {this.state.images.length > 0 &&  <Button onClick={this.handleLoadMore}/>}
        
        </Layout>
  


    );
  }
}