import Vue from 'vue';

Vue.directive('meu-transform', {
    bind(el, binding, vnode){
        let current = 0;
        el.addEventListener('dblclick', () => {
            let incremento = 0; //binding.value || 90;
            let animate = false;

            if(binding.value){
                incremento = binding.value.incremento;
                animate = binding.value.animate;
            }
            current+=incremento;
            el.style.transform = `rotate(${current}deg)`;
            if(animate){
                el.style.transition = 'transform 0.5s';
            }
        });
    }
});