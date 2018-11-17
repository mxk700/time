export default function detalizeTag(tag){

  tag.depth       = this.state.depth      || 0;
  tag.parent      = this.state.parent     || 0;
  tag.childNo     = this.state.childNo    || 0;
  tag.collapsedf  = this.state.collapsedf || true;
  tag.hidden      = this.state.hidden     || false;
  tag.lastTerm    = this.state.lastTerm   || null;

  return tag;
}

 // detalizeTag;
