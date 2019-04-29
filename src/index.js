import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './Components/SearchBar';
import YTSearch from 'youtube-api-search';
import VedioList from './Components/VedioList';
import VedioDetail from './Components/VedioDetail';


const API_KEY = 'AIzaSyDfZo4p4QS-15EanuUO7oF5S1DryHcPZB8';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
         };
        this.videoSearch('javascript');
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            });
        });
    }
    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)
        return(
            <div className="row">
            <div className="col-md12">
                
                <SearchBar onSearchTermChange={videoSearch} />
                <VedioDetail video={this.state.selectedVideo} />
                <VedioList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
            </div>
            </div>
            
        );
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));


