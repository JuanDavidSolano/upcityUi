// import "./style.css";

function CharSelector() {
  return (
    <div class="parent" id="app">
      <div class="box container">
        <div class="inner-container">
          <h2 class="subtitle text">Selecciona tu</h2>
          <h1 class="title text">PERSONAJE</h1>
        </div>
        <div class="inner-container">
          <div class="separator"></div>
          <div
            class="box char-slot"
            v-for="character in characters"
            onClick="test(character.firstname)"
          >
            <div class="slot-container"></div>
          </div>
          <div
            class="box char-slot empty-char-slot"
            v-if="canCreate && spaces > 0"
          >
            <i class="fa fa-2x fa-plus-circle"></i>
          </div>
          <div class="box char-slot empty-char-slot" v-for="index in spaces-1">
            <i class="fa fa-2x fa-lock"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharSelector;
