import React from 'react';
import { Box, Modal, Typography, CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const successStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #4CAF50',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    textAlign: 'center'
};

const OrderSuccessModal = ({ open, onClose, loading, orderDetails, totalAmount }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ ...successStyle, border: "5px solid #f56f42" }}>
                {loading ? (
                    <div className="flex flex-col items-center gap-4">
                        <CircularProgress size={50} sx={{ color: '#f56f42' }} />
                        <Typography variant="h6">Επεξεργασία παραγγελίας...</Typography>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                        <CheckCircleIcon sx={{ fontSize: 60, color: '#f56f42' }} />
                        <Typography variant="h5" className="font-bold">
                            Η παραγγελία σας ολοκληρώθηκε!
                        </Typography>
                        {orderDetails && (
                            <div className="mt-4 text-left w-full">

                                <Typography variant="body1" className="mb-2">
                                    <span className="font-semibold">Διεύθυνση:</span>{' '}
                                    {`${orderDetails.order.deliveryAddress.streetAddress}, ${orderDetails.order.deliveryAddress.area}`}
                                </Typography>
                                <Typography variant="body1" className="mb-2">
                                    <span className="font-semibold">Τρόπος Πληρωμής:</span> Μετρητά
                                </Typography>
                                <Typography variant="body1">
                                    <span className="font-semibold">Σύνολο:</span> {totalAmount}€
                                </Typography>
                            </div>
                        )}
                    </div>
                )}
            </Box>
        </Modal>
    );
};

export default OrderSuccessModal;