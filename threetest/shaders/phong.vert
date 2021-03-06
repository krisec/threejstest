out vec4 vertexColor; // specify a color output to the fragment shader

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); // see how we directly give a vec3 to vec4's constructor
    vertexColor =  vec4(position, 1.0); // set the output variable to a dark-red color
}