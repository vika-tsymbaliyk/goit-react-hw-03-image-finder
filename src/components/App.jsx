import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchPhotoByQ, itemsPerPage } from "./api";
import { Layout } from "./Layout";
import { Loader } from "./Loader/Loader";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
    isVisible: false,
    isEmpty: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) { this.fetchPhoto(this.state.query, this.state.page) }
  }

  fetchPhoto = async(query, page)=>{
    if (!query) {
      return;
    }
    this.setState({ loading: true});
    try {
      
      const {totalHits, hits} = await fetchPhotoByQ(query, page);
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => 
        ({images: [...prevState.images, ...hits],
          isVisible: page < Math.ceil(totalHits/itemsPerPage),
        }));
    } catch (error) {
      this.setState({ error: error.message })
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const serchWord = evt.target.elements.query.value;
    this.setState({
      query: serchWord ,
      images: [],
      page: 1,
      isEmpty: false,
      error: null,
    });
  };
  
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));    
  };

  render() {
    console.log(this.state.isVisible);
    const { images, isVisible, isEmpty, loading, error } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit}/>
        {loading && <Loader/>}
        {error && (
          <p >❌ Something went wrong - {error}</p>
        )}
        {isEmpty && (
          <p >Sorry. There are no images ... 😭</p>
        )}
        {images.length > 0 &&  <ImageGallery images={this.state.images}/>}
        {isVisible &&  (<Button onClick={this.handleLoadMore}/>)}
        
        </Layout>
  


    );
  }
}