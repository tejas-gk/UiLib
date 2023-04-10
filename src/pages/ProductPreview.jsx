import ProductDesktop from '/assets/product-preview-card-component-main/product-preview-card-component-main/images/image-product-desktop.jpg';
import ProductMobile from '/assets/product-preview-card-component-main/product-preview-card-component-main/images/image-product-mobile.jpg';
import cartIcon from '/assets/product-preview-card-component-main/product-preview-card-component-main/images/icon-cart.svg';
export default function ProductPreview() {
    return (
        <main className='h-screen'>
            <div className='px-4 py-6 bg-[#f3eae3] flex justify-center h-full'>
                <div className='min-w-min max-w-sm h-[615px] rounded-xl bg-white overflow-hidden flex flex-col sm:max-w-3xl sm:flex-row sm:w-[600px] sm:h-[450px] sm:m-auto'>
                    <img
                        src={ProductMobile}
                        alt='Perfume Channel'
                        className='sm:hidden'
                    />
                    <img
                        src={ProductDesktop}
                        alt='Perfume Channel'
                        className='hidden sm:block h-full w-auto'
                    />
                    <div className='p-6 sm:p-8'>
                        <p className='uppercase font-sans text-sm py-2 tracking-[0.4em] text-gray-400 sm:py-3'>
                            Perfume
                        </p>
                        <h1 className='font-serif text-3xl py-2 leading-7 text-gray-700'>
                            Gabrielle Essence Eau De Parfum
                        </h1>

                        <p className='text-sm leading-6 text-gray-400 pt-1 sm:pt-2'>
                            A floral, solar and voluptuous interpretation
                            composed by Olivier Polge, Perfumer-Creator for the
                            House of CHANEL.
                        </p>

                        <p className='py-4 flex flex-row items-center sm:py-6'>
                            <span className='text-3xl font-serif text-[#3e8168]'>
                                $149.99
                            </span>{' '}
                            <span className='pl-4 font-sans text-xs text line-through text-gray-400'>
                                $169.99
                            </span>
                        </p>
                        <a
                            href='#'
                            className='bg-[#3e8168] w-full flex item text-white py-3 rounded-lg justify-center text-sm hover:bg-[#1a4031] sm:py-3 sm:mt-3'
                        >
                            <span className=''>
                                {' '}
                                <img
                                    src={cartIcon}
                                    alt=''
                                    className='pt-[2px] pr-3'
                                />
                            </span>
                            <span className='hover:opacity-50'>
                                Add to Cart
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
