import React,{ useState } from 'react';
// Minimal UI components defined inline for this file

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow p-4 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-base ${className}`}
    {...props}
  />
);

const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className={`block font-medium text-gray-700 ${className}`}>
    {children}
  </label>
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-base ${className}`}
    {...props}
  />
);

// Select UI
const Select = ({ value, onValueChange, children, className = "" }) => {
  // Controlled select
  return (
    <div className={`relative ${className}`}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { value, onValueChange })
      )}
    </div>
  );
};

const SelectTrigger = ({ children, ...props }) => (
  <button
    type="button"
    className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
    {...props}
  >
    {children}
  </button>
);

const SelectValue = ({ placeholder, value, children }) => (
  <span className={value ? "" : "text-gray-400"}>
    {value ? children : placeholder}
  </span>
);

const SelectContent = ({ children, value, onValueChange }) => (
  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
    {React.Children.map(children, child =>
      React.cloneElement(child, { value, onValueChange })
    )}
  </div>
);

const SelectItem = ({ value: itemValue, children, value, onValueChange }) => (
  <div
    className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${value === itemValue ? "bg-blue-100" : ""}`}
    onClick={() => onValueChange(itemValue)}
    tabIndex={0}
    role="option"
    aria-selected={value === itemValue}
  >
    {children}
  </div>
);
import { Upload, UserPlus, Shield, Award } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

const NCCRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    program: '',
    year: '',
    rollNo: '',
    gender: '',
    height: '',
    weight: '',
    wingPreference: '',
    aadhaar: null,
    fitnessCert: null,
    photo: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Successful!",
        description: "Your NCC cadet application has been submitted. You will be contacted for the selection process.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        fullName: '',
        program: '',
        year: '',
        rollNo: '',
        gender: '',
        height: '',
        weight: '',
        wingPreference: '',
        aadhaar: null,
        fitnessCert: null,
        photo: null
      });
    }, 2000);
  };

  const benefits = [
    'Character development and discipline',
    'Leadership training and opportunities',
    'Adventure activities and camps',
    'National integration experience',
    'Career opportunities in Armed Forces',
    'NCC certificates (A, B, C grades)',
    'Scholarship opportunities',
    'Physical fitness development'
  ];

  const requirements = [
    'Must be a regular student of the university',
    'Age between 17-26 years',
    'Medically fit for NCC activities',
    'Minimum 75% attendance mandatory',
    'Complete 3 years of NCC training',
    'Participate in annual training camps'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join NCC as a Cadet</h2>
        <p className="text-lg text-gray-600">
          Build character, discipline, and leadership through military training
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Registration Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-900" />
                <span>Cadet Registration Form</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rollNo">Roll Number *</Label>
                    <Input
                      id="rollNo"
                      type="text"
                      placeholder="Enter your roll number"
                      value={formData.rollNo}
                      onChange={(e) => handleInputChange('rollNo', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="program">Program *</Label>
                    <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="mtech">M.Tech</SelectItem>
                        <SelectItem value="ba">B.A.</SelectItem>
                        <SelectItem value="ma">M.A.</SelectItem>
                        <SelectItem value="bcom">B.Com</SelectItem>
                        <SelectItem value="mcom">M.Com</SelectItem>
                        <SelectItem value="bsc">B.Sc</SelectItem>
                        <SelectItem value="msc">M.Sc</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year *</Label>
                    <Select value={formData.year} onValueChange={(value) => handleInputChange('year', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first">First Year</SelectItem>
                        <SelectItem value="second">Second Year</SelectItem>
                        <SelectItem value="third">Third Year</SelectItem>
                        <SelectItem value="fourth">Fourth Year</SelectItem>
                        <SelectItem value="final">Final Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Physical Information */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm) *</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Height in cm"
                      value={formData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg) *</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Weight in kg"
                      value={formData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Wing Preference */}
                <div className="space-y-2">
                  <Label htmlFor="wingPreference">Wing Preference *</Label>
                  <Select value={formData.wingPreference} onValueChange={(value) => handleInputChange('wingPreference', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred wing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="army">Army Wing</SelectItem>
                      <SelectItem value="navy">Naval Wing</SelectItem>
                      <SelectItem value="airforce">Air Force Wing</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-600">Note: Final wing allocation depends on availability and selection criteria</p>
                </div>

                {/* File Uploads */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="aadhaar">Aadhaar Card *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <input
                        type="file"
                        id="aadhaar"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload('aadhaar', e.target.files[0])}
                        className="hidden"
                        required
                      />
                      <label htmlFor="aadhaar" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {formData.aadhaar ? formData.aadhaar.name : 'Upload Aadhaar'}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fitnessCert">Fitness Certificate *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <input
                        type="file"
                        id="fitnessCert"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload('fitnessCert', e.target.files[0])}
                        className="hidden"
                        required
                      />
                      <label htmlFor="fitnessCert" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {formData.fitnessCert ? formData.fitnessCert.name : 'Upload Certificate'}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="photo">Passport Photo *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={(e) => handleFileUpload('photo', e.target.files[0])}
                        className="hidden"
                        required
                      />
                      <label htmlFor="photo" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {formData.photo ? formData.photo.name : 'Upload Photo'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                NCC Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-orange-600">Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">Unit Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Active Cadets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Annual Camps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NCCRegistration;
