import { Product } from './models/products';

function getCurrencySymbol() {
  const userLocale = navigator?.language;
  const currencyFormatter = new Intl.NumberFormat(userLocale, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  const parts = currencyFormatter.formatToParts(1);
  const currencySymbol = parts?.find((part) => part.type === 'currency')?.value;
  return currencySymbol || '$';
}

const sendEvent = (e: Product) => {
  (window as any).eventBus.dispatch('ADD_PRODUCT_CART', e);
};

function handleImageLoad(idImg: string, idSkl: string) {
  const skeleton = document.getElementById(idSkl);
  const image = document.getElementById(idImg);
  skeleton?.classList.add('hidden');
  image?.classList.remove('hidden');
}

export default function Cards(props: Product) {
  const { id, thumbnail, title, price, discountPercentage, rating } = props;
  const currencySymbol = getCurrencySymbol();
  const fullPrice = ((1 + discountPercentage / 100) * price).toFixed(2);
  const starts = Math.round(rating);
  return (
    <div className="flex flex-col justify-between w-inherit border-transparent border-2 hover:border-green-300 hover:border-2 overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-stone-400 shadow-md">
      <button className="flex flex-col mx-3 mt-3 flex overflow-hidden rounded-xl">
        <span className="w-5/12 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white m-0">
          {discountPercentage}% OFF
        </span>
        <div
          id={`skeleton-id-${id}`}
          className="skeleton w-full h-[20rem] bg-stone-300 flex items-center justify-center"
        ></div>
        <img
          id={`image-id-${id}`}
          className="object-cover w-full hidden"
          loading="eager"
          src={thumbnail}
          alt="product image"
          onLoad={() => handleImageLoad(`image-id-${id}`, `skeleton-id-${id}`)}
        />
      </button>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        <div className="mt-2 mb-5 flex flex-col items-start justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              {currencySymbol}
              {price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              {currencySymbol}
              {fullPrice}
            </span>
          </p>
          <div className="flex items-center">
            {Array.from({ length: starts }, (_, i) => i).map((x) => (
              <svg
                key={x}
                aria-hidden="true"
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            {Array.from({ length: 5 - starts }, (_, i) => i).map((x) => (
              <svg
                key={x}
                aria-hidden="true"
                className="h-5 w-5 text-yellow-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 text-slate-800 px-2.5 py-0.5 text-xs font-semibold">
              {rating}
            </span>
          </div>
        </div>
        <button
          className="flex items-center justify-center w-full rounded-md bg-green-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => sendEvent(props)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}
