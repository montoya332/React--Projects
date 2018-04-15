import React, {
  Component,
  PureComponent
} from 'react';
import './App.css';
const MEDIUM_SCREEN = 640;
const LARGE_SCREEN = 1024;

//=============================================================   VirtualList   ======================================================================
class VirtualList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      containerWidth: this.getScrollView().innerWidth
    };
    this.myRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  getScrollView() {
    if (this.scrollView) {
      return this.scrollView;
    }
    this.scrollView = window;
    return this.scrollView;
  }
  componentDidMount() {
    this.scrollView.addEventListener('scroll', this.handleScroll);
    this.scrollView.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    this.scrollView.removeEventListener('scroll', this.handleScroll);
    this.scrollView.removeEventListener('resize', this.handleResize);
  }
  getColumns(){
    const scrollView = this.getScrollView();
    if(scrollView.innerWidth > LARGE_SCREEN){
      return 3
    }
    else if(scrollView.innerWidth > MEDIUM_SCREEN){
      return 2
    }
    return 1;
  }
  handleResize(e){
    const containerWidth = this.getScrollView().innerWidth;
    if(containerWidth !== this.state.containerWidth){
      this.setState({containerWidth});
    }
    this.handleScroll(e);
  }
  handleScroll(e) {
    const offset = this.getNodeOffset();
    if (offset >= 0 && this.state.offset !== offset ) {
      this.setState({ offset });
    }
  }
  getNodeOffset() {
    const itemHeight = this.props.itemHeight
    const {scrollY} = this.getScrollView();
    return Math.floor(scrollY/itemHeight) * this.getColumns();
  }
  getVisibleRange(props = this.props) {
    const { offset } = this.state;
    const start = offset;
    let stop = offset + props.sampleSize;
    if(stop >= props.itemCount){
      stop = props.itemCount - 1;
    }
    return {
      start,
      stop,
    };
  }
  getItemStyles(index){
    const columns = this.getColumns();
    const top = Math.floor(index/columns) * this.props.itemHeight;
    const left = (index % columns) * this.state.containerWidth / columns;
    const style = {
      top,
      left, 
      position: 'absolute',
      height: this.props.itemHeight,
      width: `${100/columns}%`
    };

    return style; 
  }
  renderVisibleItems(props = this.props) {
    const { renderItem, onItemsRendered } = props;
    const { start, stop } = this.getVisibleRange();
    const columns = this.getColumns();
    const items = [];
    if (typeof start !== 'undefined' && typeof stop !== 'undefined') {
      for (let index = start; index <= stop; index++) {
        const style = this.getItemStyles(index);
        items.push(renderItem({ index, style, columns }));
      }
      onItemsRendered && onItemsRendered({ start, stop })
    }
    return items;
  }
  render() {
    const {
      className
    } = this.props;
    const totalHeight = this.props.itemHeight *  Math.ceil(this.props.itemCount / this.getColumns());
    const containerStyle = {
      height: totalHeight,
      width: 'auto',
      overflow: 'hidden',
      position: 'relative'
    }
    return (
      <div ref = { this.myRef } className = { className } onScroll = { this.handleScroll }  style={containerStyle}>
          { this.renderVisibleItems() } 
      </div>
    );
  }
}
VirtualList.defaultProps ={
  className: '',
  itemCount: 0,
  sampleSize: 11,
  itemHeight: 0,
  renderItem: ()=>{}
};
//=============================================================   Image   ======================================================================
const Image = props => {
  const getSource = () => {
    if (typeof props.src === 'function') {
      return props.src(props);
    }
    return props.src;
  };
  return (<img style={props.style} className={ props.className } src={ getSource() } alt={ props.alt } /> );
};
Image.defaultProps ={
  style: {},
  className: '',
  alt: '',
  src: ''
};
//=============================================================   VirtualImageList   ======================================================================
class VirtualImageList extends Component {
  constructor(props) {
    super(props);
    this.renderImage = this.renderImage.bind(this);
  }
  getImageId(index){
    const {start, intervals} = this.props;
    return start + intervals * index;
  }
  getImageSource(id) {
    return '/giovanni.jpg';
    //return `${this.props.baseUrl}${id}`;
  }

  renderImage({index, style }) {
    const id = this.getImageId(index);
    const src = this.getImageSource(id);
    return (<Image key={ id } style={ style } className="image-placeholder" src={ src } /> );
  }
  render() {
    const { itemCount, itemHeight, sampleSize} = this.props;
    return ( 
      <VirtualList 
        sampleSize={sampleSize}
        itemCount={itemCount}
        itemHeight={itemHeight}
        renderItem={ this.renderImage}
      />
    );
  }
}
VirtualImageList.defaultProps={
  intervals: 20,
  sampleSize: 11,
  start: 0,
  itemHeight: 480,
  itemCount: 6003,
  baseUrl: ''
};

export default VirtualImageList;

ReactDOM.render(
  <VirtualImageList />,
  document.querySelector('#react-app')
);
