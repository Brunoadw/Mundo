// Função para adicionar ou remover a classe 'hovered' com base no evento de mouse
function handleMouseHover(event, elements, action) {
    elements.forEach(function(element) {
        document.querySelector(element).classList[action]('hovered');
    });
}

// Event listeners para cada área geográfica
document.querySelector('.americanorte').addEventListener('mouseover', function(){
    handleMouseHover(event, ['.americasultxt', '.oceaniatxt', '.africatxt', '.asiatxt', '.europatxt'], 'add');
});

document.querySelector('.americanorte').addEventListener('mouseout', function(){
    handleMouseHover(event, ['.americasultxt', '.oceaniatxt', '.africatxt', '.asiatxt', '.europatxt'], 'remove');
});

document.querySelector('.africa').addEventListener('mouseover', function(){
    handleMouseHover(event, ['.americasultxt', '.oceaniatxt', '.americanortetxt', '.asiatxt', '.europatxt'], 'add');
});

document.querySelector('.africa').addEventListener('mouseout', function(){
    handleMouseHover(event, ['.americasultxt', '.oceaniatxt', '.americanortetxt', '.asiatxt', '.europatxt'], 'remove');
});

document.querySelector('.americasul').addEventListener('mouseover', function(){
    handleMouseHover(event, ['.americanortetxt', '.oceaniatxt', '.africatxt', '.asiatxt', '.europatxt'], 'add');
});

document.querySelector('.americasul').addEventListener('mouseout', function(){
    handleMouseHover(event, ['.americanortetxt', '.oceaniatxt', '.africatxt', '.asiatxt', '.europatxt'], 'remove');
});

document.querySelector('.asia').addEventListener('mouseover', function(){
    handleMouseHover(event, ['.americanortetxt', '.oceaniatxt', '.africatxt', '.americasultxt', '.europatxt'], 'add');
});

document.querySelector('.asia').addEventListener('mouseout', function(){
    handleMouseHover(event, ['.americanortetxt', '.oceaniatxt', '.africatxt', '.americasultxt', '.europatxt'], 'remove');
});

document.querySelector('.europa').addEventListener('mouseover', function(){
    handleMouseHover(event, ['.americasultxt', '.oceaniatxt', '.africatxt', '.asiatxt', '.americanortetxt'], 'add');
});

document.querySelector('.europa').addEventListener('mouseout', function(){
    handleMouseHover(event, ['.americasultxt', '.oceaniatxt', '.africatxt', '.asiatxt', '.americanortetxt'], 'remove');
});

document.querySelector('.oceania').addEventListener('mouseover', function(){
    handleMouseHover(event, ['.americasultxt', '.europatxt', '.africatxt', '.asiatxt', '.americanortetxt'], 'add');
});

document.querySelector('.oceania').addEventListener('mouseout', function(){
    handleMouseHover(event, ['.americasultxt', '.europatxt', '.africatxt', '.asiatxt', '.americanortetxt'], 'remove');
});


