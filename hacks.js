let r;
document.getElementById('modal-confirm-yes-button').style.display = 'none';
function playinterval(tt){
    r = setInterval(()=>{
        if(Number(document.getElementsByClassName('done-in-set')[0].textContent)!=Number(document.getElementsByClassName('total-in-set')[0].textContent)){
          set_interactions.total+=1;
          set_interactions.correct+=1;
          check_circuit_or_set_positions();  
          document.getElementById('next-q-button').click();
          $('#modal-popup').modal("hide");
          $('.modal-dialog').removeClass('modal-lg').removeClass('modal-xl').removeClass('modal-dialog-scrollable');
        } else{
            clearInterval(r);
            location.href = 'https://www.sentencebuilders.com/classes';
        }
    },tt);
}
let l = document.createElement('div');
let g = document.createElement('select');
let y = document.createElement('button');
let o = document.createElement('option');
let oo = document.createElement('option');
let ooo = document.createElement('option');
let oooo = document.createElement('option');
let hidden = false;
l.style = "display:flex;flex-direction:column;border:1px grey solid;max-width:130px;";

o.textContent = "Normal( "+String(Number(document.getElementsByClassName('total-in-set')[0].textContent)*3)+"s )";

oo.textContent = "Slow( "+String(Number(document.getElementsByClassName('total-in-set')[0].textContent)*5)+"s )";

ooo.textContent = "Fast( "+String(Number(document.getElementsByClassName('total-in-set')[0].textContent)*1)+"s )";

oooo.textContent = "Extra Fast( "+String(Number(document.getElementsByClassName('total-in-set')[0].textContent)*0.3)+"s )";
g.appendChild(o);
g.appendChild(oo);
g.appendChild(ooo);
g.appendChild(oooo);
y.textContent = 'Play';
y.style.color = 'white';
y.style.background = 'green';
y.onclick = function(){
  if(y.textContent === 'Play'){
    y.textContent = 'Pause ( K )';
    document.getElementById('modal-confirm-yes-button').style.display = 'none';
    y.style.background = 'red';
    if(g.value.includes('Extra Fast')){
      playinterval(300);
    } else if(g.value.includes('Normal')){
      playinterval(3000);
    } else if(g.value.includes('Fast')){
      playinterval(1000);
    } else{
      playinterval(5000);
    } 
  } else{
    clearInterval(r);
    y.textContent = 'Play';
    y.style.background = 'Green';
    document.getElementById('modal-confirm-yes-button').style.display = '';
    $('#modal-popup').modal("hide");
    $('.modal-dialog').removeClass('modal-lg').removeClass('modal-xl').removeClass('modal-dialog-scrollable');
  }
};

l.appendChild(g);
l.appendChild(y);
document.getElementById('activity-container').appendChild(l);
document.addEventListener('keydown',function(event){
  if(event.key === 'Escape'){
    if(hidden){
      document.getElementById('activity-container').appendChild(l);
      hidden = false;
    } else{
      hidden = true;
      clearInterval(r);
      y.textContent = 'Play';
      y.style.background = 'Green';
      document.getElementById('modal-confirm-yes-button').style.display = '';
      $('#modal-popup').modal("hide");
      $('.modal-dialog').removeClass('modal-lg').removeClass('modal-xl').removeClass('modal-dialog-scrollable');
      document.getElementById('activity-container').removeChild(l);
    }
  } else if (event.key === 'k'){
      if(y.textContent === 'Play'){
        y.textContent = 'Pause ( K )';
        document.getElementById('modal-confirm-yes-button').style.display = 'none';
        y.style.background = 'red';
        if(g.value.includes('Extra Fast')){
          playinterval(300);
        } else if(g.value.includes('Normal')){
          playinterval(3000);
        } else if(g.value.includes('Fast')){
          playinterval(1000);
        } else{
          playinterval(5000);
        } 
      } else{
        clearInterval(r);
        y.textContent = 'Play';
        y.style.background = 'Green';
        document.getElementById('modal-confirm-yes-button').style.display = '';
        $('#modal-popup').modal("hide");
        $('.modal-dialog').removeClass('modal-lg').removeClass('modal-xl').removeClass('modal-dialog-scrollable');
      }
  }
});
