import SAlert  from 'sweetalert2'

export const swtAlert = SAlert.mixin({
    customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
    reverseButtons: true,
})

export const callAlert = SAlert.mixin({
    iconHtml: '<i class="fas fa-phone-alt"></i>',
    customClass: {
        container: 'swal2-container-dark',
        popup: 'swal2-popup-dark',
        confirmButton: 'btn btn-sm btn-success',
        cancelButton: 'btn btn-sm btn-danger',
    },
    timer: 30000,
    timerProgressBar: true,
    buttonsStyling: false,
    // reverseButtons: true,
    toast: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    position: 'bottom-end',
})

export const swtToast = SAlert.mixin({
    toast: true,
    position: 'bottom-end',
    timer: 30000,
    timerProgressBar: true,
    buttonsStyling: false,
    customClass: {
        container: 'swal2-toast',
        title: 'p-0 mx-0 font-weight-600',
        confirmButton: 'btn btn-success mb-1',
        cancelButton: 'btn btn-danger mb-1',
        denyButton: 'btn btn-danger mb-1',
    },
})

export const Swal = SAlert.mixin({})

export default Swal
