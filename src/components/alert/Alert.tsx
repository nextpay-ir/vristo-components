import Swal from 'sweetalert2';

interface swalTypes {
    position?: 'bottom' | 'top' | 'center' | 'bottom-left' | 'bottom-right' | 'bottom-end' | 'bottom-start' | 'top-right' | 'top-left' | 'top-start' | 'top-end' | 'center-start' | 'center-end' | 'center-right' | 'center-left'
    timer?: number
    timerProgressBar?: boolean
    showConfirmButton?: boolean
    icon?: "error" | "info" | "question" | "success";
    title?: string
}

export const Alert = async (props: swalTypes) => {
    const { position, timer, showConfirmButton, icon, title, timerProgressBar } = props
    const toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: showConfirmButton,
        confirmButtonText: "باشه",
        timerProgressBar: timerProgressBar,
        timer: timer,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    toast.fire({
        icon: icon,
        title: title,
        padding: '10px 20px',
    });
};