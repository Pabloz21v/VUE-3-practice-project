import { ref,onMounted,onUnmounted } from "vue";
//creo el codigo como una funcion y lo exporto para su uso en el script del view donde se usara
export function useMouse()
{
    const x = ref(0);
    const y = ref(0);

    function update(event){
    x.value = event.pageX
    y.value = event.pageY
    }

    onMounted(()=> window.addEventListener('mousemove', update))
    onUnmounted(()=> window.removeEventListener('mousemove', update))

    return {x,y}

}
