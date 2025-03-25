import React from 'react';
import Swal from 'sweetalert2';

const SuccessswalTimer = () => {
    Swal.fire({
        title: "Custom animation with Animate.css",
        timer: 1500,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    return (
        <div>
        </div>
    );
};

export default SuccessswalTimer;