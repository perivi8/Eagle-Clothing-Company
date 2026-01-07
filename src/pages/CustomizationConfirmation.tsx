import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Settings, Upload, Palette, Ruler } from 'lucide-react';

const CustomizationConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    selectedOptions, 
    logoFile, 
    fabricOptions, 
    logoOptions, 
    embroideryOptions, 
    colorOptions, 
    sizingOptions, 
    additionalFeatures 
  } = location.state || {};

  if (!selectedOptions) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Settings className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#1C1C1C] mb-4">No Customization Data</h1>
          <p className="text-gray-600 mb-4">Please configure your customization options first.</p>
          <button
            onClick={() => navigate('/customization')}
            className="bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors"
          >
            Go to Customization
          </button>
        </div>
      </div>
    );
  }

  const requestId = 'CUS-' + Date.now();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <div className="bg-[#1C1C1C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Customization Request Submitted!</h1>
          <p className="text-xl text-gray-200 mb-2">
            Your customization preferences have been saved successfully.
          </p>
          <p className="text-gray-400">
            Request ID: <span className="text-[#DAA520] font-mono">{requestId}</span>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Customization Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Customization Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedOptions.fabricType && (
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DAA520] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-[#DAA520]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fabric Type</p>
                  <p className="font-medium text-[#1C1C1C]">
                    {fabricOptions?.find((f: any) => f.id === selectedOptions.fabricType)?.name}
                  </p>
                </div>
              </div>
            )}

            {selectedOptions.logoPlacement && (
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DAA520] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Upload className="w-5 h-5 text-[#DAA520]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Logo Placement</p>
                  <p className="font-medium text-[#1C1C1C]">
                    {logoOptions?.find((l: any) => l.id === selectedOptions.logoPlacement)?.name}
                  </p>
                </div>
              </div>
            )}

            {selectedOptions.embroideryType && (
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DAA520] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-[#DAA520]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Application Method</p>
                  <p className="font-medium text-[#1C1C1C]">
                    {embroideryOptions?.find((e: any) => e.id === selectedOptions.embroideryType)?.name}
                  </p>
                </div>
              </div>
            )}

            {selectedOptions.colors?.length > 0 && (
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DAA520] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-[#DAA520]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Selected Colors</p>
                  <p className="font-medium text-[#1C1C1C]">
                    {selectedOptions.colors.map((colorId: string) => 
                      colorOptions?.find((c: any) => c.id === colorId)?.name
                    ).join(', ')}
                  </p>
                </div>
              </div>
            )}

            {selectedOptions.sizingOption && (
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DAA520] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Ruler className="w-5 h-5 text-[#DAA520]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sizing Option</p>
                  <p className="font-medium text-[#1C1C1C]">
                    {sizingOptions?.find((s: any) => s.id === selectedOptions.sizingOption)?.name}
                  </p>
                </div>
              </div>
            )}

            {logoFile && (
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DAA520] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Upload className="w-5 h-5 text-[#DAA520]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Logo File</p>
                  <p className="font-medium text-[#1C1C1C]">{logoFile}</p>
                </div>
              </div>
            )}
          </div>

          {selectedOptions.additionalFeatures?.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Additional Features</p>
              <div className="flex flex-wrap gap-2">
                {selectedOptions.additionalFeatures.map((featureId: string) => {
                  const feature = additionalFeatures?.find((f: any) => f.id === featureId);
                  return (
                    <span 
                      key={featureId}
                      className="inline-flex items-center px-3 py-1 bg-[#DAA520] bg-opacity-10 text-[#DAA520] rounded-full text-sm font-medium"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {feature?.name}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1C] mb-6">What's Next?</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-medium text-[#1C1C1C]">Browse Products</h3>
                <p className="text-sm text-gray-600">Select products from our catalog to apply your customizations.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-medium text-[#1C1C1C]">Add to Cart</h3>
                <p className="text-sm text-gray-600">Add your selected products with customizations to your cart.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-medium text-[#1C1C1C]">Request Quote</h3>
                <p className="text-sm text-gray-600">Our team will contact you with pricing based on your specifications.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center bg-[#DAA520] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#B8941C] transition-colors"
          >
            Browse Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border-2 border-[#DAA520] text-[#DAA520] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#DAA520] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomizationConfirmation;
